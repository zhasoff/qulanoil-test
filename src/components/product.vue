<template>
    <div :class="isOpen ? 'absp' : ''"  class="product" @mouseleave="isOpen = false">
        <div class="product__items" @mouseover="isOpen = true">
            <div class="product__items-img">
                <img src="@/assets/images/png/apr1.png" alt="">
            </div>
            <div v-if="isOpen" class="product__items-nav">
                <button class="active"></button>
                <button></button>
                <button></button>
            </div>
            <div :style="isOpen ? 'padding-bottom: 34px' : `padding: 34px 0;`" class="product__items-title">
                <span>Мори кровать КРМ 900.1</span>
            </div>
            <div v-if="isOpen" class="product__items-palette">
                <div id="colorPicker">
                    <ul>
                        <li v-for="c in colors" :key="c">
                            <label>
                                <input type="radio" name="color" v-model="color" :value="c.image"
                                    :style="'background-color:' + c.bgcolor" />
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product__items-price price">
                <span class="price__old">7 159 руб.</span>
                <span class="price__new">5 017 руб.</span>
            </div>
            <div class="product__items-btn">
                <button class="btn_out_blue">КУПИТЬ</button>
                <button class=""><svg width="34" height="29" viewBox="0 0 34 29" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.0001 29C16.6794 29.0066 16.3648 28.8764 16.098 28.6266L2.62967 15.2561C-0.874971 11.7696 -0.874971 6.09992 2.62967 2.60068C4.51204 0.842412 6.73301 -0.0651634 8.99396 -1.92153e-05C11.2564 -0.0595561 13.4774 0.854693 15.3583 2.61966L17.0001 4.24589L18.6419 2.61966C22.151 -0.866919 27.8613 -0.866919 31.3705 2.61966C34.8796 6.10624 34.8796 11.7696 31.3705 15.2751L17.9067 28.6266C17.6382 28.8766 17.3222 29.0067 17.0001 29ZM8.99396 2.53107C7.37426 2.49605 5.78584 3.15861 4.44289 4.42939C1.93055 6.92252 1.93055 10.9786 4.44289 13.4717L17.0001 25.9437L29.5618 13.4591C32.0696 10.9659 32.0696 6.90987 29.5618 4.41674C27.0539 1.92361 22.9674 1.8983 20.4506 4.42939L17.9067 6.96049C17.6378 7.2038 17.3246 7.3332 17.0046 7.3332C16.6846 7.3332 16.3714 7.2038 16.1025 6.96049L13.5315 4.42939C12.1922 3.16269 10.609 2.50035 8.99396 2.53107Z"
                            fill="#E13B3F" />
                    </svg>
                </button>
            </div>
            <div v-if="isOpen" class="product__items-desc">
                <div class="product__items-desc-tab">
                    <ul>
                        <li>
                            <p>Размеры:</p>
                        </li>
                        <li>
                            <p>Ширина<br />1635 мм</p>
                        </li>
                        <li>
                            <p>Высота<br />650 мм</p>
                        </li>
                        <li>
                            <p>Глубина<br />2032 мм</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="posabs">
                <div class="posabs__parcent">
                    <img src="@/assets/images/png/redparcent.svg" alt="">
                    <p>-30%</p>
                </div>
                <div class="posabs__hot">
                    <span>ХИТ</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isOpen: false,
        colors: [
            {
                name: "1",
                image: 'hyperone',
                bgcolor: "#000000;",
            },
            {
                name: "2",
                image: 'hypertwo',
                bgcolor: "#8D2D89;",
            },
            {
                name: "3",
                image: 'hyperthree',
                bgcolor: "#3579ED;",
            },
            {
                name: "4",
                image: 'hyperfour',
                bgcolor: "#DE3225;",
            },
        ],
    })
}
</script>

<style scoped lang="scss">
input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    // border-radius: 50%;
    width: 32px;
    height: 32px;

    //   border: 4px solid #ececec;
    transition: 0.2s all linear;
    margin-right: 5px;
    /* background-color: brown; */
    box-sizing: border-box;

    position: relative;
    top: 2px;
}

input:checked {
    border: 2px solid #1D8EF6;

}

#colorPicker {
    margin-top: 12px;
    margin-bottom: 16px;

    // height: 32px;
    ul {
        display: flex;
        gap: 8px;

        li {
            list-style: none;
        }
    }
}
</style>