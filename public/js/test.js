const model = tf.sequential();
model.add(
  tf.layers.conv2d({
    inputShape: [IMAGE_HEIGHT, IMAGE_WIDTH, IMAGE_CHANNELS],
    filters: 32,
    kernelSize: 3,
    activation: 'relu',
  })
);
model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
model.add(
  tf.layers.conv2d({
    inputShape: [IMAGE_HEIGHT, IMAGE_WIDTH, IMAGE_CHANNELS],
    filters: 64,
    kernelSize: 3,
    activation: 'relu',
  })
);
model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
model.add(
  tf.layers.conv2d({
    inputShape: [IMAGE_HEIGHT, IMAGE_WIDTH, IMAGE_CHANNELS],
    filters: 128,
    kernelSize: 3,
    activation: 'relu',
  })
);
model.add(tf.layers.flatten());
model.add(
  tf.layers.conv2d({
    inputShape: [IMAGE_HEIGHT, IMAGE_WIDTH, IMAGE_CHANNELS],
    filters: 32,
    kernelSize: 3,
    activation: 'relu',
  })
);
model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: NUM_CLASSES, activation: 'softmax' }));

model.compile({
  loss: 'categoricalCrossentropy',
  optimizer: 'adam',
  metrics: ['accuracy'],
});

model.fit(trainData, trainLabels, {
  epochs: NUM_EPOCHS,
  validationData: [testData, testLabels],
});
