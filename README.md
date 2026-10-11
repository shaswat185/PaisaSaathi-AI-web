# PaisaSaathi AI — Website

Static website (HTML + Bootstrap + thoda JS). Kisi bhi static host par chalega (Firebase Hosting, Netlify, Cloudflare Pages, GitHub Pages, cPanel).

## Structure

```
index.html  about.html  support.html
privacy.html  terms.html  disclaimer.html  account-deletion.html
404.html  app-ads.txt  robots.txt  sitemap.xml
css/style.css          <- ek hi stylesheet
js/layout.js           <- HEADER + NAV + FOOTER (sirf yahin) + site settings
js/main.js             <- chhota page behaviour
assets/img/            <- logo, favicon, og-image (optimized)
```

## Header / Nav / Footer kaise badlein
Sab `js/layout.js` me hai. `NAV` aur `FOOTER_COLS` arrays edit karo — saare pages me change aa jayega.
Har page me sirf `<div id="site-header"></div>` aur `<div id="site-footer"></div>` hai.

## Publish se pehle ZARURI (placeholders)
1. **Domain**: `robots.txt` aur `sitemap.xml` me `YOUR-DOMAIN.com` ko apne domain se replace karo.
2. **app-ads.txt**: AdMob console se apni exact line paste karo (publisher ID `pub-...`). Placeholder hata do.
3. **Play Store link**: jab app live ho jaye to `js/layout.js` me `playUrl` bharo. Tab tak "Coming soon on Google Play" dikhta hai.
4. **Privacy policy** app ki asli practice se match honi chahiye (Firebase, OpenRouter, AdMob). Play Console ke Data safety form me bhi wahi batao.
5. Account deletion email (`shaswat185dubey@gmail.com`) monitor karte raho aur actual deletion process ready rakho.

## AdMob checklist
- Website ek public HTTPS domain par ho; wahi domain Play Store listing ke "Website" field me ho.
- `https://YOUR-DOMAIN/app-ads.txt` root par khule.
- Privacy Policy URL Play Console me daalo.
- AdMob approval sirf website se nahi milta — app me policy-compliant content, UMP consent (EU/UK) aur test ads sahi chalna chahiye.
