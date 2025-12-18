export const sixMonthsLinux = {
    id: "six-months-linux",
    title: "Six Months with Arch Linux: My Escape from Windows",
    excerpt: "I finally did it. After years of dealing with Windows' nonsense, I jumped ship to Arch Linux. Here's what the last six months have been like—the good, the bad, and the configs that randomly break.",
    date: "December 18, 2024",
    category: "tech & truth",
    readTime: 8,
    tags: ["linux", "arch", "hyprland", "personal"],
    image: "/images/linux.png",
    content: `It's been six months since I made the switch, and honestly? I should've done this years ago.

I remember sitting there one evening, watching my Task Manager show absurd amounts of RAM being used while I literally had nothing open. Just Windows doing... Windows things. Background processes I never asked for, telemetry I couldn't fully disable, constant updates that reset my settings. It was exhausting.

I'd been using Windows since I was a kid. I knew it inside out. I'd customized it, debloated it, removed the ads and bloatware. Made it work *my* way. I never really thought about switching to Linux—Windows was just what I knew.

But then Microsoft randomly banned my GitHub account. No real explanation, customer support was absolute trash. That was the turning point. I was done.

---

## Taking the Plunge (And Breaking Things)

I didn't go the "safe" route. I saw some insane Hyprland setups on r/unixporn and YouTube rice videos and thought, "That looks cool as hell." So I just... went for it. **Arch Linux** with **Hyprland**. No Ubuntu, no hand-holding, just straight into the deep end.

Looking back, it was probably reckless, but I'm glad I did it. If I was going to learn a new system, I wanted to *really* learn it.

The first few weeks were... an experience. I'm talking random freezes, the file system deciding to go read-only mid-work, and thermal throttling that made my laptop sound like it was about to take off. My 12th Gen Intel CPU was not happy with the default setup.

Oh, and I also completely messed up my boot menu and accidentally formatted my Windows partition. Yeah. No going back after that one. It was all-in whether I liked it or not.

![Hyprland Desktop Setup](/images/workflow.png)
*My current Hyprland setup with Project HyDE configs*

---
## The Thermal Crisis (And How I Fixed It)

The freezing issue was driving me insane. Random lockups, file system errors, the works. After way too many late nights reading forum posts and wiki pages, I figured out it was thermal management. My Intel 12th Gen needed some serious babysitting.

I ended up writing a whole script to sort it out: click [here](https://github.com/ftbhabuk/dotfiles/blob/main/fix_thermal.sh) to see the script.

This fixed the sudden heating spikes and those awful memory overflow freezes. My last system freeze? Over three months ago. The script is basically the reason my system is stable now.

---
## My Setup Today

Fast forward to now, and I'm running **Project HyDE** configs with Hyprland. Everything just clicks. The workflow is exactly what I needed. The customization and theming? I fell in love with it. Hyprland is *beautiful*, and having complete control over how everything looks and behaves is something I'll never take for granted again.

### Terminal & File Management

I'm using **Kitty** as my terminal emulator. Fast, configurable, and it just works. For file management, **Dolphin** handles everything I need—clean interface, good keyboard shortcuts, does the job without getting in the way.

### Audio Setup

I'm using **Pipewire** for audio (not PulseAudio anymore—thank god), and it's been way more stable. Sound quality is solid, no random crackling or weird volume issues like I used to get on Windows.

But let's be real—Bluetooth audio is still a problem. Windows handled it fine, but on Linux? It's hit or miss. Connections drop, pairing can be finicky. It's one of those things that just works better on Windows, and I'll admit that.

My app launcher is **Rofi** from the HyDE configs, and honestly, it's beautiful. Fast, customizable, and it just feels right. Hit a keybind, type what you want, boom—instant launch. Actually, keybindings in general are amazing. Everything I need is just a quick combo away—browser, Spotify, Obsidian, code editor, you name it. Way faster than clicking through menus.

![Rofi App Launcher](/images/rofi.png)
*The Rofi launcher from Project HyDE—clean and fast*

### Coding & AI Tools

For code, I'm primarily on **Cursor**. It's become my main editor and I'm not looking back. For AI coding help, I use **Grok**—it's free and honestly matches my personality way better than the alternatives. I'll use the free version of **Claude** sometimes too, but I've literally never touched ChatGPT. Just not my vibe.

Oh, and I have **Winbloat** set up as a VM for Windows stuff if I ever need it. Spoiler: haven't used it once in six months.

### Browsers: The Three-Way Split

This is where it gets interesting. I'm running three different browsers depending on what I'm doing:

**Zen Browser** is my main driver. It's Firefox-based and absolutely gorgeous—seriously, if you haven't tried it, do yourself a favor. It's everything I want in a browser. Clean, fast, and customizable as hell.

But here's the thing: Zen doesn't support WebRTC properly for Facebook Messenger calls. So for that one specific use case, I keep **Brave** around. Just for Messenger. That's it.

For web development work specifically, I'm trying out **Helium Browser**. Still testing it, but so far it's solid for dev stuff.

### Browser Extensions

Across all of them, I'm running the same setup:
- **uBlock Origin** (obviously)
- **Unhook** (YouTube without the distraction)
- **Dark Reader** (my eyes thank me)
- **SponsorBlock** (skip the BS)
- **Proton Pass** (password management done right)

### Music: Spotify Without the Ads

Oh, and music—I use **Spotify with Spicetify** and an ad-blocker JS extension. Free Spotify, zero ads. It's glorious. Works perfectly on Linux too, which was a pleasant surprise. And I'ts super consumizable with the Spicetify theme engine.
![spotify  View](/images/spotify.png)

### Notes & Knowledge Management

I'm using **Obsidian** for all my notes. Imported everything from Google Keep and never looked back. The graph view alone is worth it—seeing how all my notes connect is genuinely useful, not just eye candy.

![Obsidian Graph View](/images/obsidian.png)
*My Obsidian knowledge graph after   google notes import*

### Web Apps for Everything Else

For docs, PDFs, presentations, and most other productivity stuff, I just use web apps. Google Docs, whatever PDF viewer works in the browser, presentations online. No need to install bloated desktop software when the web version does the job.

## The Things That Still Bug Me

Look, I'm not going to pretend everything is perfect. There are definitely some rough edges:

**Arch Updates Breaking Things** - This is the big one. Sometimes an Arch update will just... break Hyprland or my configs. It doesn't happen often, but when it does, it's annoying as hell. Usually fixable with some wiki reading and config tweaking, but still.

**Waybar Icons Disappearing** - Sometimes the WiFi or microphone icon just vanishes from Waybar. No reason, no warning. Just gone. Have to restart Waybar to get it back. Minor, but irritating.

**Random Buggy Stuff** - Every now and then, something will just act weird. A program won't launch right, a keybind stops working, something crashes for no apparent reason. It's the nature of running a bleeding-edge setup, but it can be frustrating.

**Fan Control** - My ASUS ZenBook has proprietary fan control software that just... doesn't exist on Linux. The fans work, but they're fully automatic now. I can't manually set profiles anymore. Not a dealbreaker, but I do miss having that control.

**Bluetooth** - Still a coin flip. Will my headphones connect? Maybe. Will they stay connected? Who knows! It's gotten better, but it's not perfect.

**The ScreenPad** - My ZenBook 14 had that little touchpad screen thing. I completely forgot about it until writing this. It doesn't work on Linux at all. Honestly though? I never really used it anyway.

## Six Months Later: Zero Regrets

Here I am, half a year in, and I have zero regrets. My RAM usage is actually reasonable now. My boot time is measured in seconds. The system does what I tell it to do, when I tell it to do it. No popups. No forced updates. No fighting with my own computer.

The battery life is great. Performance is solid. The program installation process is *efficient*—way better than Windows' mess of installers and bloatware.

I'm not going back to Windows. Not a chance.

Sure, there are trade-offs. Arch updates occasionally break things. Icons disappear from Waybar. Bluetooth is still Bluetooth. But here's the thing: when something breaks on Linux, I can actually *fix* it. I understand what's happening under the hood. On Windows, I was just a passenger in my own computer.

![Terminal Neofetch](/images/neofetch.png)
*Six months in and still loving it*

Linux gave me control back. My system works *for* me now, not against me. The learning curve was steep, but so is the payoff. The customization with Hyprland, the efficiency of the workflow, the feeling of actually owning my computer—it's all worth it.

If you're on the fence about trying Linux, especially if you're frustrated with Windows, just do it. Maybe start with Ubuntu instead of jumping straight to Arch like I did. But give it a real shot.

The freedom is worth it.

---

*Useful resources:*
- [Arch Wiki](https://wiki.archlinux.org/) (saved my life multiple times)
- [Project HyDE GitHub](https://github.com/HyDE-Project) (amazing Hyprland configs)
- [Hyprland docs](https://wiki.hypr.land/) (essential reading)
- [r/unixporn](https://www.reddit.com/r/unixporn/) (for inspiration)`
};