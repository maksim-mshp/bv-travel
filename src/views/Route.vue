<template>
    <div>
        id: {{ $route.params.id }}
        <div class="z">
            <div class="a"></div>
            <div class="b"></div>
        </div>
    </div>
</template>

<style scoped>
.z {
    display: flex;
    height: 600px;
}

.a {
    width: 50%;
    background-color: #f00;
}

.b {
    width: 50%;
    background-color: #0f0;
}
</style>