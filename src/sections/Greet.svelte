<script>
	import Carousel from './../../node_modules/svelte-carousel/src/components/Carousel/Carousel.svelte';

    var cnt = 4;
    let list = [...Array(cnt).keys()];
</script>


<div style="position: absolute; width:100%; height:100%;">
    <div class="container1">
        <Carousel
            autoplay
            autoplayDuration={0}
            duration={20000}
            timingFunction="linear"
            dots={false}
            arrows={false}
            swiping={false}
            particlesToShow={2}
        >
        {#each list as l}
            <img class="picture" src="images/Greets/{l}.jpeg" alt=""/>
        {/each}
        </Carousel>
    </div>
</div>

<div class="container2">
    <div class="card">
        <h1>안녕하세요</h1>
        <p>정읍 열린주야간노인복지센터입니다</p>
        <p>가족같은 사랑과 정성, 최고의 서비스로</p>
        <p>어르신들을 편안히 모시겠습니다</p>
        <a href="https://blog.naver.com/wjdgml804"><button>네이버 블로그</button></a>
        <a href="https://band.us/band/77326488"><button>네이버 밴드</button></a>
    </div>
</div>


<style>
    img {
        margin: 0;
        filter: brightness(50%) blur(2px);
        transform: scale(1.2);
        height: auto;
        object-fit: cover;
    }

    button {
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0);
        border-color: white;
        color: white;
        padding: 0.5em 0.7em;
        text-shadow: 4px 4px 10px black;
    }
    button:hover {
        transition: 0.5s;
        background-color: rgba(85, 255, 0, 0.5);
    }

    .picture {
        height: 50vh;
        z-index: -1;
    }

    .container1 {
        position: absolute;
        width: 100vw;
        height: 100%;
		display: flex;
		justify-content: center;
        align-items: center;
    }

    .container2 {
        position: relative;
		display: flex;
		justify-content: center;
        align-items: center;
        height: 100%;
    }

    .card {
        color: white;
        text-shadow: 2px 2px 10px black;
        text-align: center;
    }
</style>