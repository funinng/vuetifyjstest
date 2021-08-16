import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#e309a0',
            },
            light: {
                primary: colors.blue.lighten3,
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },

        },
    },
});
