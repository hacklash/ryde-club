var dest = "./dist";
var src = './app';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/**/**.{sass,scss}",
    dest: dest,
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      imagePath: '/images' // Used by the image-url helper
    }
  },
  stylus: {
    src: src + "/**/**.styl",
    dest: dest
  },
  jade: {
    src: [src + "/**/**.jade", "!/templates/**/**.jade"],
    dest: dest,
    locals: {}
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  vulcanize: {
    src: dest + "/**.html",
    dest: dest,
    bower_src: src + "/bower_components/**",
    bower_dest: dest + "/bower_components/"
  },
  markup: {
    src: src + "/**.html",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/app.coffee',
      dest: dest,
      outputName: 'app.js'
    }, {
      entries: src + '/javascript/head.coffee',
      dest: dest,
      outputName: 'head.js'
    }]
  }
};