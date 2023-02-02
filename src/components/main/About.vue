<template>
    <v-sheet class="main-wrapper" color="#eee">
        <div class="content"></div>
        <h2>О нас</h2>
        <div class="about">
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit officia nemo, hic est voluptatem voluptatum
                    praesentium eligendi illo aliquam expedita sint cum dolores
                    nobis, recusandae autem molestias modi corrupti in minus
                    accusamus minima cupiditate labore consequatur quibusdam.
                    Aliquid, porro aperiam, pariatur in accusamus dignissimos
                    asperiores magni vel tempore excepturi veritatis explicabo
                    consequuntur cumque impedit minus similique quia autem
                    officia sit est dolor ipsum. Veniam sint inventore, et
                    molestiae molestias neque.
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
export default {
};
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
