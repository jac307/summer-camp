const app = Vue.createApp({
  data() {
    return {
      drawer: true,
      items: [],
      selectedItem: {
        title: "",
        description: ""
      }
    };
  },

  async created() {
    const urlParams = new URLSearchParams(window.location.search);

    const jsonFile =
      urlParams.get("file") || "Linear-Video-Editing.json";

    try {
      const response = await fetch(`./${jsonFile}`);

      if (!response.ok) {
        throw new Error(`Could not load ${jsonFile}`);
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error(`${jsonFile} does not contain any tutorials`);
      }

      this.items = data;
      this.selectedItem = data[0];
    } catch (error) {
      console.error("Error loading JSON file:", error);

      this.selectedItem = {
        title: "Tutorial unavailable",
        description:
          "The tutorial could not be loaded. Please return to the homepage and try again."
      };
    }
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item;
    }
  }
});

const vuetify = Vuetify.createVuetify();

app.use(vuetify);
app.mount("#app");