const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// const playlist = $('.playlist')
const cd = $(".cd");

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "KillBill",
      singer: "Raftaar x Fortnite",
      path: "./PlayList/song1.mp3",
      image: "./img/song1.jpg",
    },
    {
      name: "Nevada",
      singer: "Raftaar x Salim Merchant x Karma",
      path: "./PlayList/song2.mp3",
      image: "./img/song2.jpg",
    },
    {
      name: "Naachne Ka Shaunq",
      singer: "Raftaar x Brobha V",
      path: "./PlayList/song3.mp3",
      image: "./img/song3.jpg",
    },
    {
      name: "Mantoiyat",
      singer: "Raftaar x Nawazuddin Siddiqui",
      path: "./PlayList/song4.mp3",
      image: "./img/song4.jpg",
    },
    {
      name: "Aage Chal",
      singer: "Raftaar",
      path: "./PlayList/song5.mp3",
      image: "./img/song5.jpg",
    },
    {
      name: "Damn",
      singer: "Raftaar x kr$na",
      path: "./PlayList/song6.mp3",
      image: "./img/song6.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "./PlayList/song7.mp3",
      image: "./img/song7.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "./PlayList/song8.mp3",
      image: "./img/song8.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "./PlayList/song9.mp3",
      image: "./img/song9.jpg",
    },
    {
      name: "Feeling You",
      singer: "Raftaar x Harjas",
      path: "./PlayList/song10.mp3",
      image: "./img/song10.jpg",
    },
  ],
  render: function () {
    const html = this.songs.map((song) => {
      return `
            <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `;
    });
    $(".playlist").innerHTML = html.join("\n");
  },
  defineProperties: function () {
    Object.defineProperty(this,'currentSong',{
      get: function(){
        return this.songs[this.currentIndex];
      }
    })
  },
  handlEvents: function () {
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrolltop = window.scrollY || document.documentElement.scrollTop;
      const newcdWidth = cdWidth - scrolltop;
      if (newcdWidth > 0) {
        cd.style.width = `${newcdWidth}px`;
      } else {
        cd.style.width = 0;
      }
    };
  },
  loadCurrentSong:function(){
    const heading = $('header h2');
    const cdThumb = $('.cd-thumb');
    const audio = $('#audio');

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path; 

    // console.log(heading,cdThumb,audio);
  } ,
  start: function () {
    this.defineProperties();

    //handle DOM Events
    this.handlEvents();

    //Load bài đầu tiên vào UI khi chạy app
    this.loadCurrentSong();

    //Render lại playlist
    this.render();

  },
};

app.start();
