<div class="container">
    <div class="card">
        <h1>오시는 길</h1>
        <p>전북 정읍시 충정로 173 &nbsp; | &nbsp; 장명동 136-5</p>
    </div>
	<div id="kakaomap"></div>
    <script>
        var container = document.getElementById("kakaomap");
        var lat = 35.5663107059778;
        var lng = 126.86140280567956;
        var options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        map.setZoomable(false);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch('전북 정읍시 장명동 136-5', function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });    
    </script>
</div>


<style>
    #kakaomap {
        width: 90vw;
        max-width: 800px;
        height: 50vh;
        border-radius: 1em;
        /* z-index: -1; */
    }
    .container {
		display: flex;
        flex-direction: column;
		justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
    }
</style>