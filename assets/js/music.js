/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play/ pause/ seek
 * 4. CD rotate
 * 5. Next/ prev
 * 6. Random
 * 7. Next/ repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 * 
 */

const app = {
    isPlaying: false,
    currentIndex: 0,
    isRandom: 0,
    isRepeat: false,
    isHeart: false,
    isSetting: false,

    songs: [
        {
            name: "FPT Pray",
            author: "Unknown",
            image: "/fptu_study-with-me/assets/img/img_music/fpt_pray.jpg",
            path: "/fptu_study-with-me/assets/music/music_3_fpt-pray_(mp3cut).mp3",
            quoteContent: "Khi chúng ta nỗ lực để trở nên tốt đẹp hơn, mọi thứ xung quanh chúng ta cũng sẽ trở nên tốt đẹp hơn",
            quoteAuthor: "- Nhà giả kim"
        },
        {
            name: "Naruto sorrow",
            author: "Toshio Masuda",
            image: "/fptu_study-with-me/assets/img/img_music/sadness_and_sorrow.jpg",
            path: "/fptu_study-with-me/assets/music/Sadness and Sorrow by Purojekuto Musashi-arr. Michael Brown.mp3",
            quoteContent: "Thật dễ dàng để chấp nhận và yêu thương một kẻ nào đó giống mình, nhưng để yêu thương ai đó khác mình thực sự rất khó khăn.",
            quoteAuthor: "- Chuyện con mèo dạy hải âu bay",
        },
        {
            name: "Study with me",
            author: "jawonee",
            image: "/fptu_study-with-me/assets/img/img_music/study_with_me.jpg",
            path: "/fptu_study-with-me/assets/music/music_2_study-with-me_(mp3cut).mp3",
            quoteContent: "Với bản tính kiên nhẫn của loài mèo, chúng chờ cho con hải âu tự nói lên mong ước được bay lượn, bởi có một câu châm ngôn truyền đời đã dạy chúng rằng bay lượn là một quyết định hoàn toàn cá nhân",
            quoteAuthor: "- Chuyện con mèo dạy hải âu bay"
        },
        {
            name: "Evening study",
            author: "Free music",
            image: "/fptu_study-with-me/assets/img/img_music/study_evening.jpg",
            path: "/fptu_study-with-me/assets/music/your-name.mp3",
            quoteContent: "Thứ tôi muốn mua rất đắt đỏ, nơi tôi muốn đi rất xa xôi, người tôi yêu lại vô cùng ưu tú. Vì vậy, tôi phải cố gắng",
            quoteAuthor: "- Tại sao bạn lại nỗ lực nhiều như vậy?"
        },
        {
            name: "Your name OST 2",
            author: "Imdoong",
            image: "/fptu_study-with-me/assets/img/img_music/your-name-2.jpg",
            path: "/fptu_study-with-me/assets/music/your-name-2.mp3",
            quoteContent: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó",
            quoteAuthor: "- Nhà giả kim"
        },
        {
            name: "Pretty's on the inside",
            author: "Chloe Adams",
            image: "/fptu_study-with-me/assets/img/img_music/pretty.jpg",
            path: "/fptu_study-with-me/assets/music/Chloe Adams - Pretty's On The Inside.mp3",
            quoteContent: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó",
            quoteAuthor: "- Nhà giả kim"
        },
        {
            name: "Nghe bài này đi em",
            author: "Củ Cải",
            image: "/fptu_study-with-me/assets/img/img_music/nghe-bai-nay-di-em.jpg",
            path: "/fptu_study-with-me/assets/music/Nghe Bài Này Đi Em - Củ Cải x Chu x Specter (Prod.by Rastz).mp3",
            quoteContent: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó",
            quoteAuthor: "- Nhà giả kim"
        },
        {
            name: "Cho tôi tình yêu",
            author: "Denn ( Prod.by MinhTan)",
            image: "/fptu_study-with-me/assets/img/img_music/cho-toi-tinh-yeu.jpg",
            path: "/fptu_study-with-me/assets/music/Cho Tôi Tình Yêu - Denn (Lyrics).mp3",
            quoteContent: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó",
            quoteAuthor: "- Nhà giả kim"
        },
        {
            name: "Xuân này con không về T7M",
            author: "T7M",
            image: "/fptu_study-with-me/assets/img/img_music/namhen.jpg",
            path: "/fptu_study-with-me/assets/music/XUÂN NÀY CON KHÔNG VỀ REMIX ĐÁM GIỖ THỎ BẢY MÀU - OST TẾT VỀ QUÊ THỎ.mp3",
            quoteContent: "Khi bạn khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó",
            quoteAuthor: "- Nhà giả kim"
        },

    ],
    
    render: function() {
        let htmls = this.songs.map((song, index) => {
            return `<div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                        <div class="thumb"
                            style="background-image: url('${song.image}')">
                        </div>
                        <div class="body">
                            <h3 class="title">${song.name}</h3>
                            <p class="author">${song.author}</p>
                        </div>
                        <div class="option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                `
        })
        playlist.innerHTML = htmls.join('\n');
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function() {
        const _this = this;

        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }
        
        // Audio play/pause
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
        }

        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
        }

        // nextBtn
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            _this.render();
            audio.play();
        }

        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            _this.render();
            audio.play();
        }

        // random btn
        randomBtn.onclick = function() {
            if(_this.isRandom === false) {
                randomBtn.classList.add('active');
                _this.isRandom = true;
            } else {
                randomBtn.classList.remove('active');
                _this.isRandom = false;
            }
        }

        // repeat btn
        repeatBtn.onclick = function() {
            if(_this.isRepeat === false) {
                repeatBtn.classList.add('active');
                _this.isRepeat = true;
            } else {
                repeatBtn.classList.remove('active');
                _this.isRepeat = false;
            }
        }

        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')) {
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                if(e.target.closest('.option')) {
                    console.log("Update later!^^");
                }
            }
        }

        // audio.ontimeupdate = function() {
        //     if(audio.duration) {
        //         const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
        //         progress.value = progressPercent;
        //         console.log(progressPercent);
        //     }
        // }

        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }

        // heart btn
        heartBtn.onclick = function() {
            if(_this.isHeart === false) {
                heartBtn.classList.add('active');
                _this.isHeart = true;
            } else {
                heartBtn.classList.remove('active');
                _this.isHeart = false;
            }
        }

        // setting btn
        settingBtn.onclick = function() {
            if(_this.isSetting === false) {
                playlist.classList.add('active');
                settingBtn.classList.add('active');
                _this.isSetting = true;
            } else {
                playlist.classList.remove('active');
                settingBtn.classList.remove('active');
                _this.isSetting = false;
            }
        }
    },

    loadCurrentSong: function() {
        songName.textContent = this.currentSong.name;
        songAuthor.textContent = this.currentSong.author;
        musicImage.style.backgroundImage = `url('${this.currentSong.image}')`;
        contentSlider.textContent = this.currentSong.quoteContent;
        authorSlider.textContent = this.currentSong.quoteAuthor;
        audio.src = this.currentSong.path;
    },

    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex > this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex = this.currentIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while(this.currentIndex === newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    start: function() {
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
    }
}
app.start();


