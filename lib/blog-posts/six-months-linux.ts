export const sixMonthsLinux = {
    id: "six-months-linux",
    title: "Six Months with Arch Linux: Escaping Windows and Embracing the Workflow",
    excerpt: "From frustrating RAM hogs to a blocked GitHub, Microsoft's policies pushed me to Arch. This is my journey into Hyprland, system stability, and a genuinely empowered workflow.",
    date: "November 11, 2025",
    category: "tech & truth",
    readTime: 6,
    tags: ["linux", "arch", "hyprland", "system-stability", "workflow", "performance", "dev-tools", "personal"],
    image: "/images/linux-journey.jpg",
    content: `For years, I operated within the confines of Windows, enduring its relentless background processes, unexpected resource consumption, and a general feeling of diminishing control. My 16GB of RAM would routinely sit at 50% usage while idle, despite every optimization I could muster. This simmering frustration finally boiled over when Microsoft unilaterally blocked my GitHub account without warning. That was the definitive signal: it was time to move to an operating system that offered transparency, performance, and true user agency.

## The Migration: Arch and Hyprland

My pivot to Linux wasn't a tentative step but a full dive into **Arch Linux**, paired with the highly customizable **Hyprland** tiling window manager. The choice was deliberate: if I was going to transition, it would be to a system that demanded a deep understanding and offered unparalleled control. Hyprland, in particular, promised a keyboard-driven workflow and an aesthetic freedom far beyond anything Windows could offer.

### Overcoming Initial Instability

The first few weeks with Arch were a harsh education. My system battled random freezes, file system remounts to read-only mode, and aggressive thermal throttling. It turns out, a generic kernel wasn't sufficient for my 12th Gen Intel hardware. The key to stability lay in meticulous configuration and understanding the underlying system. Through tuning kernel parameters and implementing CPU performance caps, I finally achieved a rock-solid system.

\`\`\`bash
# Example: Setting CPU performance cap
echo 75 | sudo tee /sys/devices/system/cpu/intel_pstate/max_perf_pct
\`\`\`

This initial struggle highlighted a core truth: Linux grants immense control, but with it comes the responsibility to truly configure your environment.

## The Hyprland Workflow: Performance and Control

Hyprland, coupled with my HyDE project configurations, has transformed my desktop into an extremely efficient and visually appealing workspace. The focus is entirely on a keyboard-driven workflow, minimizing mouse interaction and maximizing speed. This approach has led to:

*   **Tiling Automation:** Windows are automatically arranged, eliminating manual resizing.
*   **Dynamic Workspaces:** Effortless navigation and management of virtual desktops.
*   **Custom Keybinds:** Every action, from launching applications to managing windows, is mapped to a keyboard shortcut.
*   **App Launcher Integration:** Utilizing efficient launchers for quick access to frequently used applications like Zen-browser, beta Helium-browser, VSCode, and Kitty terminal. This also contributes to **fast boot times**, as resources are managed precisely.

## Beyond the Basics: Features and Persistent Gripes

My experience with Arch has been about finding practical solutions and appreciating the granular control it offers. The sheer power of the Linux ecosystem is evident in areas like:

*   **Effortless Package Management:** The \`pacman\` package manager, alongside the AUR, makes installing new software incredibly straightforward. No more hunting for installers or wrestling with dependencies.

    \`\`\`bash
    # Installing a package with pacman
    sudo pacman -S firefox
    \`\`\`

*   **Easy VPN Connectivity:** Integrating VPN services has been surprisingly simple, allowing for secure browsing and development without convoluted third-party tools.

*   **Fan Profile Management with \`asusctl\`:** For my ASUS laptop, \`asusctl\` provides essential control over fan profiles, integrated into my workflow for quick adjustments.

*   **Fast Boot and Resource Efficiency:** The minimal nature of Arch, combined with Hyprland, ensures a lightning-fast boot and remarkably low idle RAM usage. My system is ready almost instantly, and resources are reserved for *my* tasks, not background bloat.

### The Linux "Sharp Edges" (What I Still Miss)

While Arch has largely surpassed my expectations, it's not without its ongoing challenges and a few creature comforts I still long for:

*   **Zed Editor Login:** A minor but persistent annoyance – Zed Code Editor simply refuses to reliably store login sessions, requiring frequent re-authentication.
*   **VLC and Video Playback:** Despite trying every codec pack and configuration imaginable, VLC remains stubbornly unable to play videos on my system. MPV has become the indispensable alternative.
*   **PulseAudio Woes:** Even after significant tuning, PulseAudio occasionally messes with sound quality, requiring restarts or reconfigurations. I really tried loving you, Soundwire, but it couldn't fully compensate.
*   **Unstable Bluetooth:** Connecting Bluetooth devices often feels like a gamble, with frequent disconnections and difficulties maintaining a stable link.
*   **Missing Browser Gestures:** The smooth, intuitive finger swipe gestures for navigation (back/forward) in Chromium-based browsers that I was accustomed to on Windows are notably absent or clunky.
*   **Dolby Atmos Audio:** The rich, spatial audio experience of Dolby Atmos is something I haven't been able to replicate on Linux.

## Six Months On: An Empowered User

After six months, my Arch Linux setup is a testament to the power of customization and control. The initial pain of learning was an investment that yielded a fast, stable, and deeply personal computing experience.

*   **Last System Freeze:** Over three months ago, permanently resolved by careful tuning.
*   **Idle RAM Usage:** Consistently around 2GB (a significant reduction from 8GB+ on Windows).
*   **Regrets:** None. The deep understanding gained is invaluable.
*   **Going Back to Windows:** Not an option.

The journey from a frustrated Windows user to an empowered Arch Linux enthusiast has been challenging but ultimately rewarding. My system no longer works against me; it works *for* me.

---

For those interested in exploring this path:
*   [Arch Linux Wiki](https://wiki.archlinux.org/)
*   [Hyprland GitHub Repo](https://github.com/hyprwm/Hyprland)
*   [Project HyDE GitHub Repo (example configs)](https://github.com/username/project-hyde-repo) *[Replace with your actual repo link]*`,
};