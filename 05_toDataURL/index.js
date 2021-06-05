const canvas = document.querySelector("#canvas"),
  context = canvas.getContext("2d"),
  snapshotButton = document.querySelector("#snapshotButton"),
  snapshotImageElement = document.querySelector("#snapshotImageElement"),
    loop,
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width / 25,
    HOUR_HAND_TRUNCATION = canvas.height / 10,
    NUMERAL_SPACING = 20,
    RADIUS = canvas.width / 2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMERAL_SPACING;

