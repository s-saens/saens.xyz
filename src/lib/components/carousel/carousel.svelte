<script>
    export let h = "--h:256px";
</script>

<div class="carousel">
    <div class="carousel-wrapper" style={h}>
        <div class="content">
            <slot/>
        </div>
    </div>
</div>


<style lang="scss">
	@import '../../scss/breakpoints.scss';

    .carousel {
        overflow-y: hidden;
        height: 280px;
    }
    .carousel-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        height:300px;
    }

    .content {
        display: flex;
        gap: 1em;
        height:280px;
        width:max-content;
    }
</style>