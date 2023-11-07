{
  //interface --> generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<AppleWatch> = {
    name: "Larry",
    computer: {
      brand: "HP",
      model: "H9266",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Apple",
      model: "sw44",
      display: "Amoled",
    },
  };

  //-------------

  interface SamsungWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface HondaBike {
    brand: string;
    model: string;
  }

  const richDeveloper: Developer<SamsungWatch, HondaBike> = {
    name: "Rich Bro",
    computer: {
      brand: "Apple",
      model: "KW266",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Samsung",
      model: "s24",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Honda",
      model: "Civic",
    },
  };

  //
}
