if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let f={};const n=e=>a(e,r),t={module:{uri:r},exports:f,require:n};s[r]=Promise.all(i.map((e=>t[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/C792Ss1bUjA2qmOILgw4V/_buildManifest.js",revision:"9d6fc9b65f8de757f7ace76cada726ca"},{url:"/_next/static/C792Ss1bUjA2qmOILgw4V/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/380.d15f88a277670825.js",revision:"d15f88a277670825"},{url:"/_next/static/chunks/552.a5e3aad85198acf8.js",revision:"a5e3aad85198acf8"},{url:"/_next/static/chunks/626.c0cabe6bc7f98eda.js",revision:"c0cabe6bc7f98eda"},{url:"/_next/static/chunks/819.38a17f94d3b0907a.js",revision:"38a17f94d3b0907a"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-84d27dea309175fb.js",revision:"84d27dea309175fb"},{url:"/_next/static/chunks/pages/_app-4bfc5471f6726c9c.js",revision:"4bfc5471f6726c9c"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/auth/login-4e2844c65dfe2b0c.js",revision:"4e2844c65dfe2b0c"},{url:"/_next/static/chunks/pages/auth/register-8ca2bf040cfa881e.js",revision:"8ca2bf040cfa881e"},{url:"/_next/static/chunks/pages/index-18a7f892504c0d36.js",revision:"18a7f892504c0d36"},{url:"/_next/static/chunks/pages/settings-b2ae2d2f00f7f35c.js",revision:"b2ae2d2f00f7f35c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-884b37a95930e8e2.js",revision:"884b37a95930e8e2"},{url:"/_next/static/css/05cf602f166af368.css",revision:"05cf602f166af368"},{url:"/_next/static/css/28463481ab4dbbd3.css",revision:"28463481ab4dbbd3"},{url:"/_next/static/css/5c3d1e222ed8b987.css",revision:"5c3d1e222ed8b987"},{url:"/_next/static/css/8367a25e86bd2429.css",revision:"8367a25e86bd2429"},{url:"/_next/static/css/cb81b194ecc29b55.css",revision:"cb81b194ecc29b55"},{url:"/assets/Icon.svg",revision:"1f0b53abfdacb3a656bd1c57d75d7717"},{url:"/assets/add-circle-fill.svg",revision:"3ad45d4e92057e8fab665423c0aabc6f"},{url:"/assets/add-circle.svg",revision:"4b48f1355cf6fcc168002f8f4b9503d6"},{url:"/assets/add-restaurant-fill.svg",revision:"a086a634b151d0ea71897e307302ed67"},{url:"/assets/add-restaurant.svg",revision:"37459d89c08b3535e754761e27c752a4"},{url:"/assets/arrow-down.svg",revision:"e897cfa6365871c16689b3f4b403e9d9"},{url:"/assets/arrow-left.svg",revision:"60ad68dddc38b03b4f76986219b340bb"},{url:"/assets/arrow-right.svg",revision:"900edfea70e9841b39dc5313f977f06d"},{url:"/assets/arrow-tr.svg",revision:"48c7a0e868d3dcad92f83e3d5eff2e57"},{url:"/assets/arrow-up.svg",revision:"48a4f9e92d756257f6baaf91329dfe5e"},{url:"/assets/bell-notification.svg",revision:"eb7e7695a8fe6babcc6c69e50763c0cd"},{url:"/assets/bell.svg",revision:"7428ef64bdbaae0c62e6755499f55308"},{url:"/assets/bookingLogo.svg",revision:"fde2fa8f4e6da1b0b610c1d72a1583f1"},{url:"/assets/building.svg",revision:"585c55383bfef53b64dede548134b7bb"},{url:"/assets/calendar-fill.svg",revision:"c69e3d486b9ecfebe32ac9cc76ead9e5"},{url:"/assets/calendar.svg",revision:"8fdaa9c7a0e202853def370aba08672f"},{url:"/assets/camera.svg",revision:"47b89fce355eace08962fff7dd64f333"},{url:"/assets/cancel.svg",revision:"a1339c375d55d4d5ab6d9ca3ffb884f1"},{url:"/assets/chat-add.svg",revision:"af2d439824f72b4eaac1ccf35ab73b03"},{url:"/assets/chat-lines.svg",revision:"c3e03e74205c8a578452eb0b2caa4506"},{url:"/assets/check.svg",revision:"e745845942cdf76270865970519837ff"},{url:"/assets/close-search.svg",revision:"37ad71e113845a3fc4bac625af125f68"},{url:"/assets/close.svg",revision:"a1339c375d55d4d5ab6d9ca3ffb884f1"},{url:"/assets/crown.svg",revision:"e9f42ce20b9fd6c38c0ece2fdd9c1bdb"},{url:"/assets/delivery.svg",revision:"c8c8c037fe87b5513990905bf274774f"},{url:"/assets/discount-percent-fire-fill.svg",revision:"1f8f555ef4f61f87a53be31cd33d9938"},{url:"/assets/discount-percent-fire.svg",revision:"6ff3f7cfd7b20dd90da6c0af98a1d43f"},{url:"/assets/dollar.svg",revision:"2218a61e4cc990ba5af202f8c2bbccfe"},{url:"/assets/door-closed-fill.svg",revision:"b40485e646b0f7c0987097ff0315f3ed"},{url:"/assets/door-closed.svg",revision:"455efe8eedfb848edf49de364823e661"},{url:"/assets/door-open-fill.svg",revision:"e506fc45e4f2ef456e4c19060ba93a6d"},{url:"/assets/door-opened.svg",revision:"eabde8df2af5bfdd4bd64645342546b7"},{url:"/assets/download.svg",revision:"fb76ccfc78f6b20be69a1e24a5ccac31"},{url:"/assets/edit.svg",revision:"7eb3a8e9ead9564ca3fcde96528d2e0f"},{url:"/assets/email.svg",revision:"a36c660eb25b3f3e9c28fdfeed44ef28"},{url:"/assets/eye-alt.svg",revision:"e68e00a66c07f73642625c40991e1575"},{url:"/assets/eye-close.svg",revision:"5555621dadc9aad02958a08e6637b46e"},{url:"/assets/facebook-tag.svg",revision:"bc801870fd262d97cf7e79287524a9a7"},{url:"/assets/feed-fill.svg",revision:"4a5661dd90a01d09f9eb4ed67dd107ba"},{url:"/assets/feed.svg",revision:"7cfff0d8eb118f9f4a5517d6ccb08fe3"},{url:"/assets/filter-list.svg",revision:"a4c56fc2ce879f006d3e4d00c2a221db"},{url:"/assets/gps.svg",revision:"c6c26ad8ccddbd7d6e8984ef29aef211"},{url:"/assets/graduation-cap.svg",revision:"d3976f332a2b859046e2c6f798b215cc"},{url:"/assets/heart-fill.svg",revision:"4e2ce58b52b8c2fdb4df65297751663a"},{url:"/assets/heart.svg",revision:"f74898522b5dcc166f4b05b521e04e4f"},{url:"/assets/home-fill.svg",revision:"f7a1f7df700c9c7d9e2aa7a6162fc400"},{url:"/assets/home.svg",revision:"2ccd79223518863e0d1e2ee2eed52e32"},{url:"/assets/info-empty.svg",revision:"f6197fce3c66988b9e7bf9694286da79"},{url:"/assets/instagram.svg",revision:"2a87d48be8cc4c73d458c0924223bba0"},{url:"/assets/internet.svg",revision:"7c9a17423fd64b3d25320a91dc832b3f"},{url:"/assets/kitchen.svg",revision:"d237a6a3f8aa0ef8d76dcad24caeadee"},{url:"/assets/language.svg",revision:"54dd30328e58ce976b3ea2f55e1628ee"},{url:"/assets/lifebelt.svg",revision:"007d84bdac1239d84704f65f9faacdb6"},{url:"/assets/linkedin.svg",revision:"0697cb0fb9ea63f5c3dd4aba76983a1d"},{url:"/assets/loader.svg",revision:"3ed9c021f865cee09abb238caee39560"},{url:"/assets/lock.svg",revision:"d3f222258120f1a709251fbe9a2cd502"},{url:"/assets/log-out.svg",revision:"8f30f64305c8ad84a3d3274b2aa2579c"},{url:"/assets/mail.svg",revision:"3ba7402c13494e0fdeb51118131847de"},{url:"/assets/map.svg",revision:"bd186a5c46b0031ad0d58777c836aa4c"},{url:"/assets/marker-icon-restaurant-favorite.svg",revision:"77989c5ad25de70ea4458df588bb046b"},{url:"/assets/marker-icon-restaurant-feed.svg",revision:"bb74810f645283b98f41d1e49f127387"},{url:"/assets/marker-icon-restaurant.svg",revision:"acc3e814489f026d8798410636870a34"},{url:"/assets/marker-icon.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/assets/media-image.svg",revision:"2f889b05f84fc99355701cb6d29c66c4"},{url:"/assets/menu-fill.svg",revision:"40af6e1fd9a1b18d412bab2bb8a46844"},{url:"/assets/menu.svg",revision:"7a45313a2c12ea822f3868ad51006aba"},{url:"/assets/messengerLogo.svg",revision:"2e278c66cd29d14151901ef5f464f57d"},{url:"/assets/minus.svg",revision:"b35455c1cf0f093a5f68d68d9d9b7d88"},{url:"/assets/more-horizontal.svg",revision:"90c73eb304d879f328c35fafcb65cf00"},{url:"/assets/more.svg",revision:"6218c24f96de8f8e43a58790f3dbf20b"},{url:"/assets/move-left.svg",revision:"d717ef51ebbfd011c45ce9067985685a"},{url:"/assets/move-right.svg",revision:"2f2cbe044e2dc8988996d24a5b1cec3e"},{url:"/assets/nav-arrow-down.svg",revision:"1b5da6a7b5e3d84db1665308387586d8"},{url:"/assets/nav-arrow-left.svg",revision:"9f4a3c0565d908f632a1e03882b56570"},{url:"/assets/nav-arrow-right.svg",revision:"4a99196f3dfc865622c96bfc676dff48"},{url:"/assets/nav-arrow-up.svg",revision:"f840210db202195a235c99e471b435e9"},{url:"/assets/no-results.svg",revision:"f634fe9b42949e89cbfc072ed81aa3ec"},{url:"/assets/page-star.svg",revision:"7c481fc994e26894c193af13a51ee00b"},{url:"/assets/percentage-circle-fill.svg",revision:"b628db66076fde25bc6f931e6ae4882d"},{url:"/assets/percentage-circle.svg",revision:"1f468ce6a25de9d36c9d9153fd1e4ac6"},{url:"/assets/phone.svg",revision:"06be0986a6fe9259a37581ee024c4e53"},{url:"/assets/pin.svg",revision:"6605378c7f27f774d4aadb37c97f2c02"},{url:"/assets/pinterest.svg",revision:"c46f649250c02a6c2f52ef56b877c5c3"},{url:"/assets/plus.svg",revision:"6b22fc271afa06cdbd8bf9bd2356d472"},{url:"/assets/privacy-policy.svg",revision:"9c1b161e7620b4c23d5ef25e3442eb01"},{url:"/assets/profile-circle-fill.svg",revision:"990f2878a4411702615d3b63df126471"},{url:"/assets/profile-circle.svg",revision:"5ddf7636546db85fdd13e3270e7215e5"},{url:"/assets/remove-media-image.svg",revision:"8fe33e3a83e345ebbad83f173e784b6c"},{url:"/assets/review.svg",revision:"5a23bae6a6db07ab96c4307b3e49e295"},{url:"/assets/scales.svg",revision:"6571cc8ff28569dc52ced3449459066c"},{url:"/assets/search.svg",revision:"8c16fe9041b70cb7123a9e40a968e775"},{url:"/assets/settings.svg",revision:"b1e9ad1e9fd148c4e6d988bd474528e7"},{url:"/assets/share-1.svg",revision:"1a0fb2154c5a6315a47fd8886bdad651"},{url:"/assets/share.svg",revision:"dbd51ea0d92fc9877d9fce86bdb4c892"},{url:"/assets/star-fill.svg",revision:"81bbb39803fad5e32c0a6763f0590f8c"},{url:"/assets/star.svg",revision:"bf9308ccdcb7f87954b41e2f15ae07a9"},{url:"/assets/telegramLogo.svg",revision:"95f0d7e94eb1efba6fb3b08d5f54532c"},{url:"/assets/tiktok.svg",revision:"1c4a980ab8d90fb476846d85a7865699"},{url:"/assets/trash.svg",revision:"a3a80cdef5488aa89e4795a22a46fc61"},{url:"/assets/tripadvisorLogo.svg",revision:"333c52a15db0fd8d288987491dd74714"},{url:"/assets/tunnel.svg",revision:"668177f44120afd6ca333b193f7ea50d"},{url:"/assets/twitter.svg",revision:"b8d52a56d25e37ebd22d9fd28c3e095c"},{url:"/assets/twitterLogo.svg",revision:"d1e76a856cd80fa8dee06ca5a414d019"},{url:"/assets/upload.svg",revision:"8454c68401d21424661f42b92bb86fc9"},{url:"/assets/user.svg",revision:"378245dae06817ac90ba6af22ce1f132"},{url:"/assets/verified-user.svg",revision:"ec29cf2a86863b021c5ce39307e7f1a8"},{url:"/assets/webLogo.svg",revision:"8da36a3e7ebb9f4af90a06015b893342"},{url:"/assets/whatsappLogo.svg",revision:"e23bf7c1e0695806eccdd310bc7e44ce"},{url:"/eatwy_beta_logo.svg",revision:"48317fe66a8024a490544c5a39623992"},{url:"/eatwy_logo.svg",revision:"f343aefe82532af34c5911e2809420c5"},{url:"/eatwyk-blue-transparent.gif",revision:"25396e6745c038cc5a15f7e5f5fcc1d1"},{url:"/eatwyk-blue-transparent.png",revision:"2b734eea20c3a9770989b0048efd370e"},{url:"/eatwyk-blue.png",revision:"94263e1fd007b5d483aca683468f177f"},{url:"/eatwyk.ico",revision:"5c8eb83bba58ec166b299d0e038ba2ae"},{url:"/eatwyk.png",revision:"01c4f7e2002870ebc3cd9dafceea0a4c"},{url:"/favicon.ico",revision:"2c3745447a5211836f94b8b0abc45eff"},{url:"/font.css",revision:"2aa9e680476e8899d00160f75008b1f9"},{url:"/icon-192x192.png",revision:"6c46fd5698b393fc3f78e79319cc2b10"},{url:"/icon-256x256.png",revision:"c7b532b8b6342ecfcab49333cae499dc"},{url:"/icon-384x384.png",revision:"6e83726214e11da4aa20e228f981c1a6"},{url:"/icon-512x512.png",revision:"0db2a35c3c0f51bb664012cc10bc594d"},{url:"/img/clouds-bg-transparent.svg",revision:"2b1aeef0389ab90f609c2c1caeb0e64b"},{url:"/img/clouds-bg.svg",revision:"ec3679f92719dfc6514f97693b92d268"},{url:"/logo.png",revision:"01c4f7e2002870ebc3cd9dafceea0a4c"},{url:"/logo.svg",revision:"f343aefe82532af34c5911e2809420c5"},{url:"/manifest.json",revision:"a8e2bbc2d5963a377044e299efd56519"},{url:"/robots.txt",revision:"181a6c1eb826804b086642172825f108"},{url:"/sitemap-0.xml",revision:"faa6652a9177a222d4381386609e226f"},{url:"/sitemap.xml",revision:"47df5b0221134526ff753ff83f3afe83"},{url:"/stif.svg",revision:"1f2e227d3b4285a7795a773603c4a186"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
