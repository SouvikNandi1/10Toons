const player = new Plyr('#video', {
    // controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
    hideControls: false,
    fullscreen: { enabled: true, fallback: true, iosNative: false },
    autoplay: true,
    loop: { active: true },
    keyboard: { focused: true, global: true },
    // controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
    settings: ['captions', 'quality', 'speed'],
    controls: [
        //   'play-large', // The large play button in the center
        //   'restart', // Restart playback
        //   'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        //   'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        'airplay', // Airplay (currently Safari only)
        'fullscreen', // Toggle fullscreen
        'landscape' // Add the landscape button
    ]
    // https://github.com/Disunic20/10Toons/releases/download/mrbeanreal/MrBeansHolidaymovie.mp4
});