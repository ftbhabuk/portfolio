export const sixMonthsLinux = {
    id: "six-months-linux",
    title: "Six Months with Arch Linux: My Escape from Windows",
    excerpt: "I finally did it. After years of dealing with Windows' nonsense, I jumped ship to Arch Linux. Here's what the last six months have been like—the good, the bad, and the accidentally formatted partitions.",
    date: "November 11, 2025",
    category: "tech & truth",
    readTime: 6,
    tags: ["linux", "arch", "hyprland", "personal"],
    image: "/images/linux.png",
    content: `It's been six months since I made the switch, and honestly? I should've done this years ago.

I remember sitting there one evening, watching my Task Manager show 8GB of RAM being used while I literally had nothing open. Just Windows doing... Windows things. Background processes I never asked for, telemetry I couldn't fully disable, constant updates that reset my settings. It was exhausting.

But the real breaking point? Microsoft blocked my GitHub account. No warning, no explanation that made sense. Just locked out. That was it for me. I was done.

## Taking the Plunge (And Breaking Things)

I didn't ease into Linux with Ubuntu or Mint like most people suggest. Nope, I went straight for **Arch Linux** with **Hyprland**. Looking back, it was probably reckless, but I'm glad I did it. If I was going to learn a new system, I wanted to *really* learn it.

The first few weeks were... an experience. I'm talking random freezes, the file system deciding to go read-only mid-work, and thermal throttling that made my laptop sound like it was about to take off. My 12th Gen Intel CPU was not happy with the default setup.

Oh, and I also completely messed up my boot menu and accidentally formatted my Windows partition. Yeah. No going back after that one. It was all-in whether I liked it or not.

![Hyprland Desktop Setup](/images/workflow.png)
*My current Hyprland setup with Project HyDE configs*

## The Thermal Crisis (And How I Fixed It)

The freezing issue was driving me insane. Random lockups, file system errors, the works. After way too many late nights reading forum posts and wiki pages, I figured out it was thermal management. My Intel 12th Gen needed some serious babysitting.

I ended up writing a whole script to sort it out: click [here](https://github.com/ftbhabuk/dotfiles/blob/main/fix_thermal.sh) to see the script.





This fixed the sudden heating spikes and those awful memory overflow freezes. My last system freeze? Over three months ago. The script is basically the reason my system is stable now.

## My Setup Today

Fast forward to now, and I'm running **Project HyDE** configs with Hyprland. Everything just clicks. The workflow is exactly what I needed.

I'm using **Pipewire** for audio (not PulseAudio anymore—thank god), and it's been way more stable. Sound quality is solid, no random crackling or weird volume issues.

My app launcher is **Rofi** from the HyDE configs, and honestly, it's beautiful. Fast, customizable, and it just feels right. Hit a keybind, type what you want, boom—instant launch.

For code, I'm primarily on **Cursor** right now, but I've been testing **Zed** on the side. Zed is *fast*—like, stupid fast. The only annoying thing is it refuses to keep me logged in. Every single time I open it, I have to authenticate again. Haven't fully made the switch yet because of that, but I'm getting close.

![Rofi App Launcher](/images/rofi.png)
*The Rofi launcher from Project HyDE—clean and fast*

### Browsers: Zen and Helium

For browsing, I'm all-in on **Zen Browser** for Firefox-based stuff and **Helium** for when I need Chromium. Zen is gorgeous—seriously, if you haven't tried it, do yourself a favor. It's Firefox but better looking and more customizable.

Helium handles anything that absolutely needs Chromium compatibility. Between the two, I'm covered.

### Music: Spotify Without the Ads

Oh, and music—I use **Spotify with Spicetify** and an ad-blocker JS extension. Free Spotify, zero ads. It's glorious. Works perfectly on Linux too, which was a pleasant surprise.

## The Things That Still Bug Me

Look, I'm not going to pretend everything is perfect. There are definitely some rough edges:

**Fan Control** - This one's frustrating. My ASUS ZenBook has proprietary fan control software that just... doesn't exist on Linux. The fans work, but they're fully automatic now. I can't manually set profiles anymore. Not a dealbreaker, but I do miss having that control.

**Bluetooth** - Still a coin flip. Will my headphones connect? Maybe. Will they stay connected? Who knows! It's gotten better, but it's not perfect.

**Browser Gestures** - I really miss the smooth swipe gestures for navigation in Chromium browsers from Windows. The touchpad gestures on Linux just aren't as polished.

**The ScreenPad** - My ZenBook 14 had that little touchpad screen thing. I completely forgot about it until writing this. It doesn't work on Linux at all. Honestly though? I never really used it anyway.

**Zed Login Issues** - As mentioned, having to log in every time is annoying. Small thing, but death by a thousand cuts, you know?

## Six Months Later: Zero Regrets

Here I am, half a year in, and I have zero regrets. My RAM usage sits around 2GB idle. My boot time is measured in seconds. My system is stable. My workflow is clean.

I'm not going back to Windows. Not a chance.

Sure, there are trade-offs. Some things don't work as smoothly. I lost my Windows partition in a moment of user error. But here's the thing: when something breaks on Linux, I can actually *fix* it. I understand what's happening under the hood. On Windows, I was just a passenger in my own computer.

![Terminal Neofetch](/images/neofetch.png)
*Six months in and still loving it*

Linux gave me control back. My system works *for* me now, not against me. The learning curve was steep, but so is the payoff.

If you're on the fence about trying Linux, especially if you're frustrated with Windows, just do it. Maybe start with Ubuntu instead of jumping straight to Arch like I did. But give it a real shot.

The freedom is worth it.

---

*Useful resources:*
- [Arch Wiki](https://wiki.archlinux.org/) (saved my life multiple times)
- [Project HyDE GitHub](https://github.com/HyDE-Project) (amazing Hyprland configs)
- [Hyprland docs](https://wiki.hypr.land/) (essential reading)
- [r/unixporn](https://www.reddit.com/r/unixporn/) (for inspiration)`
};