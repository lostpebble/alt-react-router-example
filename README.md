alt react-router example
========================

An example project showing a way to create react-router React projects with the Alt flux implementation.

### Install and run

```
npm install
npm start
```

### Building on top of this project

I used gulp to compile all the scripts (forwarded to webpack), images and the SCSS styles.

To compile and watch scripts, styles and images just run:
```
gulp
```

Then, to start a live server, in a different console window, you can run **either**:
```
gulp liveserver
npm start
```

This also will refresh the live server if any changes to scripts, styles or images are detected.