;
let player;

function onPlayerReady() {
    const playerContainer = $(".video");
    const playBig = $(".video__playbig");
    const playSmall = $(".video__playsmall");

    const eventPlay = (playTarget) => {
        playTarget.click(e => {
            e.preventDefault();

            if (playerContainer.hasClass("paused")) {
                playerContainer.removeClass("paused");
                player.pauseVideo();
            } else {
                playerContainer.addClass("paused");
                player.playVideo();
            }

            if (!playerContainer.hasClass("paused-splash")) {
                playerContainer.addClass("paused-splash");
            };
        });



        $('.video__total').click(e => {
            const bar = $(e.currentTarget);
            const clickedPosition = e.offsetX;

            const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
            const newPlaybackPositionSec =
                (player.getDuration() / 100) * newButtonPositionPercent;

            $(".video__current").css({
                left: `${newButtonPositionPercent}%`
            });

            player.seekTo(newPlaybackPositionSec);
        });
    };

    $('.video__volume-control').click(e => {
        const btnVolume = $('.video__volume-control');
        if (player.isMuted()) {
            btnVolume.removeClass('mute')
            player.unMute()
        } else {
            btnVolume.addClass('mute');
            player.mute();

        }
    });

    $('.video__volume-progress').click(e => {
        const barVolume = $(e.currentTarget);
        const clickedPositionVolume = e.offsetX;
        const newBtnPositionPercentVolume = ((clickedPositionVolume / barVolume.width()) * 100);
        if (newBtnPositionPercentVolume > 100) return

        player.setVolume(newBtnPositionPercentVolume);

        $(".video__volume-current").css({
            width: `${newBtnPositionPercentVolume}%`
        });

    });

    eventPlay(playBig);
    eventPlay(playSmall);

    let interval = setInterval(() => {
        const durationSec = player.getDuration();
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;
        $(".video__current").css({
            left: `${completedPercent}%`
        });

    }, 1000)
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        height: "391",
        width: "662",
        videoId: "vk5H1DzvHu8",
        events: {
            onReady: onPlayerReady,
            // onStateChange: onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
};