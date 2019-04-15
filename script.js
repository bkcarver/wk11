var myVue = new Vue({
  el: "#app",
  data: {
    cameraInput: "",
    introducedInput: "",
    mountInput: "",
    filmInput: "",
    exposureInput: "",
    idInput: "",
    cameras: [{

      camera: "Nikon F1",
      introduced: "1959",
      mount: "F Mount",
      film: "35mm",
      exposure: "manual"
    }, {

      camera: "Pentax K1000",
      introduced: "1976",
      mount: "K Bayonet Mount",
      film: "35mm",
      exposure: "manual"
    }, {

      camera: "Canon AE1",
      introduced: "1976",
      mount: "Canon FD",
      film: "35mm",
      exposure: "manual, shutter priority"
    }, {

      camera: "Polaroid SX-70",
      introduced: "1972",
      mount: "Fixed Glass",
      film: "600 Instant Film",
      exposure: "manual aperture slide"
    }, {

      camera: "Contax T2",
      introduced: "1990",
      mount: "Fixed Lens",
      film: "35mm",
      exposure: "Auto, Aperture Priority"
    }]

  },

  methods: {
    deleteCamera: function(cameraObject) {
      this.cameras = this.cameras.filter(function(cameras) {
        if (cameras.id !== cameraObject.id) {
          return true;
        } else {
          return false;
        }
      })
    },
    addNewCamera: function() {
      let newCamera = {
        camera: this.cameraInput,
        introduced: this.introducedInput,
        mount: this.mountInput,
        film: this.filmInput,
        exposure: this.exposureInput,
        id: this.idInput
      }
      this.cameras.push(newCamera);
      this.cameraInput = this.introducedInput = this.mountInput = this.filmInput = this.exposureInput = this.idInput = "";
    },
    validation: function() {
      if (this.cameraInput === "" ||
        this.introducedInput === "" ||
        this.mountInput === "" ||
        this.filmInput === "" ||
        this.exposureInput === "" ||
        this.idInput === "") {
        alert("Please fill out entire form");
        return false;
      }
      return true;
    }
  }
});