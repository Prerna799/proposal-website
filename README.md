# 💕 Romantic Proposal Website - Propose Day Special

A beautiful, romantic static website created for Propose Day (February 8, 2026). Features smooth animations, floating hearts, and an interactive day selection quiz leading to a heartfelt proposal letter.

## ✨ Features

- 🎨 **Beautiful Design**: Soft pink, lavender, and white color scheme
- 💖 **Floating Hearts**: Gentle animated hearts in the background
- 📱 **Mobile Responsive**: Perfect on all devices
- 🎯 **Interactive Quiz**: Fun day selection game
- 💌 **Animated Letter**: Proposal letter with moving photo border
- ⚡ **100% Static**: No backend, no database - perfect for GitHub Pages

## 🚀 Quick Start

### 1. Add Your Photos

Replace the placeholder photos in `assets/images/` with your couple photos:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

**Recommended size**: 500x500px (square format works best)

### 2. Customize the Letter

Open `letter.html` and edit the letter content (lines 95-119) with your personal message.

### 3. Test Locally

Simply open `index.html` in your web browser to test the website.

## 📤 Deploy to GitHub Pages

### Method 1: GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Method 2: Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Propose Day website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📁 Project Structure

```
letter/
├── index.html          # Day selection page
├── letter.html         # Proposal letter page
├── style.css          # All styles and animations
├── script.js          # JavaScript logic
├── assets/
│   ├── images/        # Your couple photos (add 4 photos here)
│   └── music/         # Optional: Add background music
└── README.md          # This file
```

## 🎯 How It Works

### Page 1: Day Selection (index.html)
- User sees a cute message: "Hey cutie ❤️ Do you know which special day is today?"
- 10 day options to choose from
- Only "Propose Day ✅" is correct
- Wrong answers show a cute retry message
- Correct answer shows success animation and redirects to letter

### Page 2: Proposal Letter (letter.html)
- Beautiful letter card with your message
- Animated moving border with your photos
- Soft glow effects and floating hearts
- Perfectly centered and responsive

## 🎨 Customization

### Change Colors

Edit `style.css` to change the color scheme:
```css
/* Main gradient background */
background: linear-gradient(135deg, #FFE5F0 0%, #E6E6FA 50%, #FFE5F0 100%);

/* Primary pink color */
color: #FF69B4;

/* Lavender accent */
color: #9370DB;
```

### Change Fonts

The website uses Google Fonts:
- **Dancing Script**: Romantic cursive font
- **Poppins**: Clean, modern font
- **Great Vibes**: Elegant script font

To change fonts, update the Google Fonts link in HTML files.

### Add Background Music (Optional)

1. Add your music file to `assets/music/`
2. Add this code before `</body>` in `letter.html`:

```html
<audio autoplay loop>
    <source src="assets/music/romantic-song.mp3" type="audio/mpeg">
</audio>
```

**Note**: Some browsers block autoplay. User might need to click to play.

## 💡 Tips

1. **Image Format**: Use JPG or PNG for photos
2. **Image Size**: Keep each photo under 1MB for fast loading
3. **Testing**: Test on both mobile and desktop before sharing
4. **Personalization**: Make the letter text your own!
5. **Backup**: Keep a backup of your customized version

## 🐛 Troubleshooting

### Photos not showing?
- Check that photos are in `assets/images/` folder
- Ensure filenames match: `photo1.jpg`, `photo2.jpg`, etc.
- Check file extensions (.jpg vs .jpeg)

### Wrong answer doesn't show?
- Check browser console (F12) for errors
- Ensure `script.js` is loaded correctly

### Website not loading on GitHub Pages?
- Ensure `index.html` is in the root directory
- Check that GitHub Pages is enabled in settings
- Wait 3-5 minutes after enabling (deployment takes time)

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎉 Share Your Love

1. Get your GitHub Pages URL
2. Share with your special someone
3. Wait for their answer! 💕

## 📝 License

Free to use and customize for personal purposes. Made with love! ❤️

---

**Made with 💖 for Propose Day - February 8, 2026**

*Remember to replace the letter content with your own heartfelt words!*
