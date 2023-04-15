var wheel = new wheelnav("wheel");
      wheel.spreaderInTitle = icon.plus;
      wheel.spreaderOutTitle = icon.cross;
      wheel.navItems = [
        {title: "Sección 1", content: document.getElementById("section1")},
        {title: "Sección 2", content: document.getElementById("section2")},
        {title: "Sección 3", content: document.getElementById("section3")}
      ];
      wheel.createWheel();