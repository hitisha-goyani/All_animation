        function start() {
            playAudio('https://tim-school.com/codepen/horses1/start.mp3');
            $(".start").css({ 'display': 'none' });
            setTimeout(function () {
                $(".horse1").css({ 'animation': 'horse 15s linear forwards' });
                $(".horse2").css({ 'animation': 'horse 17.5s linear forwards' });
                $(".horse3").css({ 'animation': 'horse 16s linear forwards' });
                $(".horse4").css({ 'animation': 'horse 14.5s linear forwards' });
                $(".horse5").css({ 'animation': 'horse 13s linear forwards' });
            },
                8500);
            setTimeout(function () {
                document.getElementById('fireworks').style.display = "flex";
                playAudio('https://tim-school.com/codepen/horses1/fireworks.mp3');
            },
                26200);
            setTimeout(function () {
                document.getElementById('fireworks').style.display = "none";
                $(".horse1").css({ 'animation': 'none' });
                $(".horse2").css({ 'animation': 'none' });
                $(".horse3").css({ 'animation': 'none' });
                $(".horse4").css({ 'animation': 'none' });
                $(".horse5").css({ 'animation': 'none' });
                start();
            },
                31000);
        }

        var audio_;

        function playAudio(src) {
            if (audio_) audio_.pause();
            const audio = audio_ = new Audio(src);
            audio.play();
            audio.currentTime = 0;
        }