# personal-use-icons

[![npm version](https://img.shields.io/npm/v/personal-use-icons)](https://www.npmjs.com/package/personal-use-icons)

A lightweight icon library for my personal use, and now maybe yours. This package contains a collection of React icons that you can use in your Next.js or React projects.

---

## ✨ Features

- ✅ React components for each icon  
- ✅ Tree-shakable – only import what you need  
- ✅ Full TypeScript support  

---

## 📦 Installation

Using **npm**:

```bash
npm install personal-use-icons
```

Or using **yarn**:

```bash
yarn add personal-use-icons
```

---

## 🚀 Usage

Import only the icons you need as named exports:

```tsx
import { Microphone } from 'personal-use-icons';

export default function Example() {
  return (
    <div className="flex gap-4">
      <Microphone size={16} />
    </div>
  );
}
```

---

## 📌 Props

All icons are SVG-based React components and support common props:

- `size`
- `width`, `height`
- `stroke`, `fill`
- `className`
- Any other valid SVG/HTML attributes

---

<!-- ## 📁 Icon List

Here’s a list of currently available icons:

- `CustomSwordIcon`
- `QiOrbIcon`
- `SectBadgeIcon`

_(You can expand this list as you add more icons)_ 

--- -->

## 🛠 Contributing

This package is designed for personal/internal use.  
If you'd like to contribute, feel free to fork the repo or open a pull request.

To add an icon , just drop your icon svg file in the svgs folder(the name you use here will be the name of the export in your Next/React app).
Once you add your svg, I will generate the rest after I merge the PR.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---


