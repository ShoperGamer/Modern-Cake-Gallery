# Modern-Cake-Gallery 🍰✨
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/Language-HTML-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/Language-CSS-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Framework-Bootstrap-purple.svg)](https://getbootstrap.com/)

---

## ภาษาไทย 🇹🇭

ยินดีต้อนรับสู่ **Modern-Cake-Gallery**! 👋 โปรเจกต์นี้คือแกลเลอรีรูปภาพเค้กที่ทันสมัยและตอบสนอง (Responsive) สร้างขึ้นด้วย HTML, CSS, และ JavaScript โดยใช้เฟรมเวิร์ก Bootstrap 🧁 โดดเด่นด้วยฟังก์ชันการสุ่มรูปภาพเค้กน่ารักๆ พร้อมเอฟเฟกต์ Fade-in และโหมดสลับธีม (Light/Dark Mode) เพื่อประสบการณ์การใช้งานที่น่าประทับใจ!

### ทำไมต้อง Modern-Cake-Gallery? 🤔

เราสร้าง Modern-Cake-Gallery ขึ้นมาเพื่อเป็น **ตัวอย่างที่ชัดเจนของการสร้าง Web Application แบบ Single Page ที่มีลูกเล่น** 💡 ช่วยให้คุณ:

* **เรียนรู้และทำความเข้าใจ** 🧠 การสร้างหน้าเว็บแบบ Interactive ด้วย HTML (โครงสร้าง), CSS (การจัดรูปแบบและแอนิเมชัน), และ JavaScript (การจัดการเหตุการณ์และ DOM).
* **ค้นหาและอ้างอิง** 🔍 การนำ Bootstrap มาใช้เพื่อสร้าง UI ที่สวยงามและตอบสนองได้อย่างรวดเร็ว.
* **ฝึกฝนและสร้างแรงบันดาลใจ** ✨ ในการสร้างแกลเลอรีรูปภาพแบบไดนามิก, การใช้ JavaScript เพื่อสุ่มข้อมูล, และการจัดการธีมของเว็บไซต์.

### คุณสมบัติเด่น ✨

* **แกลเลอรีเค้กแบบสุ่ม**: กดปุ่มเพื่อสุ่มแสดงรูปภาพเค้กใหม่ๆ พร้อมเอฟเฟกต์การเปลี่ยนภาพที่นุ่มนวล.
* **โหมดกลางวัน/กลางคืน**: สลับธีมการแสดงผลระหว่างโหมดสว่างและโหมดมืด เพื่อความสบายตาในการใช้งาน.
* **การออกแบบที่ตอบสนอง (Responsive Design)**: แสดงผลได้สวยงามบนทุกอุปกรณ์ ตั้งแต่เดสก์ท็อปไปจนถึงมือถือ ด้วยพลังของ Bootstrap.
* **ไอคอนที่สวยงาม**: ใช้ Bootstrap Icons เพื่อเพิ่มความน่าสนใจให้กับ UI.

### โครงสร้างของ Repository 📁

Repository นี้ประกอบด้วยไฟล์หลักสำหรับสร้างแกลเลอรี:


```

Modern-Cake-Gallery/

├── Cake.html # โครงสร้างหน้าเว็บหลัก (HTML)

├── Cake.css # สไตล์ชีทสำหรับจัดรูปแบบและโหมดมืด (CSS)

├── Cake.js # สคริปต์สำหรับการสุ่มรูปภาพและสลับธีม (JavaScript)

├── Picture/ # โฟลเดอร์สำหรับเก็บรูปภาพเค้ก (ต้องสร้างและใส่รูปภาพเอง)

│ ├── cake1.jpg

│ ├── cake2.jpg

│ └── ...

└── icon/ # โฟลเดอร์สำหรับเก็บไอคอน favicon (ต้องสร้างและใส่รูปภาพเอง)

├── icon.jpg

└── ...

```

**หมายเหตุ**: โฟลเดอร์ `Picture/` และ `icon/` ต้องถูกสร้างขึ้นและมีไฟล์รูปภาพตามที่ระบุใน `Cake.js` และ `Cake.html` เพื่อให้โปรเจกต์ทำงานได้อย่างสมบูรณ์.

### การตั้งค่าและการใช้งาน 🛠️

คุณไม่จำเป็นต้องติดตั้งซอฟต์แวร์พิเศษใดๆ นอกเหนือจากเว็บเบราว์เซอร์เพื่อดูโปรเจกต์นี้!

1.  **โคลน Repository**:
    * เปิด Terminal หรือ Command Prompt และใช้คำสั่ง Git:
        ```bash
        git clone [https://github.com/YourUsername/Modern-Cake-Gallery.git](https://github.com/YourUsername/Modern-Cake-Gallery.git)
        cd Modern-Cake-Gallery
        ```
2.  **เตรียมรูปภาพ**:
    * สร้างโฟลเดอร์ชื่อ `Picture` ภายใน `Modern-Cake-Gallery/`.
    * นำรูปภาพเค้กที่คุณต้องการใส่ลงในโฟลเดอร์ `Picture/` โดยตั้งชื่อไฟล์ให้สอดคล้องกับ `Cake.js` (เช่น `cake1.jpg`, `cake2.jpg` เป็นต้น).
    * สร้างโฟลเดอร์ชื่อ `icon` ภายใน `Modern-Cake-Gallery/`.
    * นำรูปภาพไอคอนที่คุณต้องการใช้สำหรับ Favicon ใส่ลงในโฟลเดอร์ `icon/` โดยตั้งชื่อไฟล์เป็น `icon.jpg`.
3.  **เปิดในเบราว์เซอร์**:
    * เปิดไฟล์ `Cake.html` ด้วยเว็บเบราว์เซอร์ที่คุณชื่นชอบ (เช่น Chrome, Firefox, Edge).

### วิธีการใช้งาน 🚀

* **สุ่มรูปภาพ**: คลิกที่ปุ่ม **"สุ่มรูปใหม่"** เพื่อเปลี่ยนรูปภาพเค้กที่แสดง.
* **สลับธีม**: คลิกที่ปุ่มรูปพระจันทร์/พระอาทิตย์ (ที่มุมล่างขวาของหน้าจอ) เพื่อสลับระหว่างโหมดสว่างและโหมดมืด.

### คำอธิบายโค้ดโดยย่อ 🧑‍💻

* **`Cake.html`**: ไฟล์ HTML หลักที่กำหนดโครงสร้างของหน้าเว็บ, ลิงก์ไปยัง Bootstrap CSS, Bootstrap Icons, และไฟล์ CSS/JavaScript ของโปรเจกต์. มีส่วน `<img>` สำหรับแสดงรูปเค้ก และปุ่มสำหรับสุ่มรูปและสลับธีม.
* **`Cake.css`**: ไฟล์ CSS ที่กำหนดสไตล์พื้นฐานของหน้าเว็บ, การจัดวางองค์ประกอบ, และสไตล์เฉพาะสำหรับโหมดมืด (โดยใช้ `[data-bs-theme="dark"]`). มีการใช้ `transition` เพื่อสร้างเอฟเฟกต์ที่ราบรื่น.
* **`Cake.js`**: ไฟล์ JavaScript ที่ประกอบด้วย:
    * อาร์เรย์ `images` ที่เก็บพาธของรูปภาพเค้กทั้งหมด.
    * ฟังก์ชัน `changeSrc()`: สุ่มเลือกรูปภาพจากอาร์เรย์, อัปเดต `src` ของ `<img>`, และใช้ `setTimeout` ร่วมกับการเปลี่ยน `opacity` เพื่อสร้างเอฟเฟกต์ Fade-in.
    * ฟังก์ชัน `toggleTheme()`: สลับค่า `data-bs-theme` บนแท็ก `<body>` ระหว่าง 'light' และ 'dark' และเปลี่ยนไอคอน/สไตล์ของปุ่มสลับธีม.

### การมีส่วนร่วม 🤝

เรายินดีต้อนรับการมีส่วนร่วมจากทุกคน! 🎉 หากคุณมีแนวคิดในการปรับปรุงแกลเลอรีนี้ (เช่น การเพิ่มฟังก์ชันสไลด์โชว์อัตโนมัติ, การเพิ่มคำบรรยายใต้รูปภาพ, หรือการปรับปรุง UI/UX) หรือต้องการเพิ่มรูปภาพเค้กใหม่ๆ โปรดอ่าน [CONTRIBUTING.md](CONTRIBUTING.md) (ถ้ามี) สำหรับแนวทางในการมีส่วนร่วม.

### สิทธิ์การใช้งาน 📜

โปรเจกต์นี้อยู่ภายใต้ [MIT License](LICENSE)

---

## English 🇬🇧

Welcome to **Modern-Cake-Gallery**! 👋 This project is a responsive and modern cake image gallery built with HTML, CSS, and JavaScript, utilizing the Bootstrap framework 🧁. It features a delightful random cake image display with a fade-in effect and a toggleable light/dark mode for an enhanced user experience!

### Why Modern-Cake-Gallery? 🤔

We created Modern-Cake-Gallery as a **clear example of building an interactive Single Page Web Application with dynamic features** 💡, helping you to:

* **Learn and understand** 🧠 how to create interactive web pages using HTML (structure), CSS (styling and animations), and JavaScript (event handling and DOM manipulation).
* **Find and reference** 🔍 the integration of Bootstrap to quickly create a beautiful and responsive UI.
* **Practice and get inspired** ✨ to build dynamic image galleries, use JavaScript for random data selection, and manage website themes.

### Key Features ✨

* **Random Cake Gallery**: Click a button to randomly display new cake images with a smooth transition effect.
* **Light/Dark Mode**: Toggle between light and dark themes for comfortable viewing in different environments.
* **Responsive Design**: Looks great on all devices, from desktops to mobile phones, thanks to Bootstrap.
* **Beautiful Icons**: Utilizes Bootstrap Icons to enhance the UI's visual appeal.

### Repository Structure 📁

This repository contains the main files for building the gallery:


```

Modern-Cake-Gallery/

├── Cake.html # Main web page structure (HTML)

├── Cake.css # Stylesheet for styling and dark mode (CSS)

├── Cake.js # Script for random image selection and theme toggling (JavaScript)

├── Picture/ # Folder for storing cake images (must be created and populated)

│ ├── cake1.jpg

│ ├── cake2.jpg

│ └── ...

└── icon/ # Folder for storing favicon icon (must be created and populated)

├── icon.jpg

└── ...

```

**Note**: The `Picture/` and `icon/` folders must be created and contain image files as referenced in `Cake.js` and `Cake.html` for the project to function correctly.

### Setup and Usage 🛠️

You don't need to install any special software beyond a web browser to view this project!

1.  **Clone the Repository**:
    * Open your Terminal or Command Prompt and use the Git command:
        ```bash
        git clone [https://github.com/YourUsername/Modern-Cake-Gallery.git](https://github.com/YourUsername/Modern-Cake-Gallery.git)
        cd Modern-Cake-Gallery
        ```
2.  **Prepare Images**:
    * Create a folder named `Picture` inside `Modern-Cake-Gallery/`.
    * Place your desired cake images into the `Picture/` folder, naming the files consistently with `Cake.js` (e.g., `cake1.jpg`, `cake2.jpg`, etc.).
    * Create a folder named `icon` inside `Modern-Cake-Gallery/`.
    * Place your desired favicon icon image into the `icon/` folder, naming the file `icon.jpg`.
3.  **Open in Browser**:
    * Open the `Cake.html` file with your favorite web browser (e.g., Chrome, Firefox, Edge).

### How to Use 🚀

* **Randomize Image**: Click the **"สุ่มรูปใหม่"** (Random New Image) button to change the displayed cake image.
* **Toggle Theme**: Click the moon/sun icon button (at the bottom right corner of the screen) to switch between light and dark modes.

### Brief Code Explanation 🧑‍💻

* **`Cake.html`**: The main HTML file defines the web page structure, links to Bootstrap CSS, Bootstrap Icons, and the project's CSS/JavaScript files. It includes an `<img>` tag for displaying the cake image and buttons for randomizing the image and toggling the theme.
* **`Cake.css`**: The CSS file defines the basic styling of the web page, element positioning, and specific styles for dark mode (using `[data-bs-theme="dark"]`). It uses `transition` for smooth effects.
* **`Cake.js`**: The JavaScript file contains:
    * An `images` array storing paths to all cake images.
    * The `changeSrc()` function: Randomly selects an image from the array, updates the `src` of the `<img>` tag, and uses `setTimeout` with `opacity` changes to create a fade-in effect.
    * The `toggleTheme()` function: Toggles the `data-bs-theme` attribute on the `<body>` tag between 'light' and 'dark', and changes the icon/style of the theme switcher button.

### Contribution 🤝

We welcome contributions from everyone! 🎉 If you have ideas for improving this gallery (e.g., adding an automatic slideshow function, image captions, or UI/UX enhancements) or wish to add new cake images, please refer to [CONTRIBUTING.md](CONTRIBUTING.md) (if available) for contribution guidelines.

### License 📜

This project is licensed under the [MIT License](LICENSE)

