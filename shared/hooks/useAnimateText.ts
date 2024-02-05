import { useEffect, useState } from 'react';

function useAnimateText() {
	const [typedText, setTypedText] = useState('');
	const [textList, setTextList] = useState<string[]>([]);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [delay, setDelay] = useState(100);
	const [deleting, setDeleting] = useState(false);

	const typeNextCharacter = () => {
		if (!deleting && currentIndex < textList?.[currentTextIndex]?.length) {
			setTypedText(
				(prevTypedText) => prevTypedText + textList[currentTextIndex][currentIndex]
			);
			setCurrentIndex(currentIndex + 1);
		} else if (deleting && currentIndex >= 0) {
			setTypedText((prevTypedText) => prevTypedText.slice(0, -1));
			setCurrentIndex(currentIndex - 1);
		} else if (!deleting && currentIndex === textList?.[currentTextIndex]?.length) {
			setDeleting(true);
			setTimeout(() => {
				setDeleting(false);
				setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
				setCurrentIndex(0);
				setTypedText('');
			}, 500);
		}
	};

	useEffect(() => {
		const timeoutId = setTimeout(typeNextCharacter, deleting ? 1000 : delay); // Adjust delay when deleting

		return () => clearTimeout(timeoutId);
	}, [currentIndex, textList, delay, deleting]);

	const startTyping = (textArray, inputDelay = 100) => {
		setTextList([...textArray]);
		setDelay(inputDelay);
		setCurrentIndex(0);
		setCurrentTextIndex(0);
		setTypedText('');
		setDeleting(false);
	};

	return { startTyping, typedText };
}

export { useAnimateText };
