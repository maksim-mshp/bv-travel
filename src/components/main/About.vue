<template>
    <v-sheet class="main-wrapper" color="#eee">
        <div class="content"></div>
        <h2>О нас</h2>
        <div class="about">
            <div>
                <p>
                    Куда сходить в незнакомом городе? Сделать новые фотки для
                    блога, побывать на пикнике или сходить на театральную
                    премьеру? Как среди разнообразия множества локаций, найти
                    именно то место, которое придется тебе по душе? Именно для
                    этого и существует наш сервис. Всего пара минут и вы
                    получите не только маршрут, созданный на основе
                    индивидуальных предпочтений, но и сможете узнать подробную
                    информацию о каждой локации и при необходимости сразу купить
                    билеты. Если вам хочется упростить и разнообразить свои
                    путешествия, то мы создали сервис именно для Вас.
                </p>
            </div>
            <div>
                <h3>Возможности:</h3>
                <ul>
                    <li>создание индивидуальных маршрутов</li>
                    <li>выбор популярных маршрутов</li>
                    <li>поиск популярных мест</li>
                </ul>
            </div>
        </div>
    </v-sheet>
</template>

<script>
export default {};
</script>

<style scoped>
.main-wrapper {
    padding: 40px;
}

h2 {
    text-align: center;
    font-size: 2.5em !important;
}

p {
    font-size: 1.1em !important;
    width: 90%;
    display: block;
    margin: auto;
    margin-top: 30px;
}

.about {
    display: flex;
}

.about > div {
    width: 50%;
}

h3 {
    margin-top: 30px;
    margin-left: 40px;
    margin-bottom: 10px;
}

ul {
    margin-left: 40px;
    font-size: 1.27em !important;
}

@media (max-width: 650px) {
    .about {
        display: block;
    }

    .about > div {
        width: 100%;
    }
}
</style>
