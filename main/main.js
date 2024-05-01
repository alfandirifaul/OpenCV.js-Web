function openCVReady(){
    cv["onRuntimeInitialzed"] = () => {
        console.log("OpenCV Ready.");

        // read img
        let imgMain = cv.imread("main-img");
        cv.imshow("main-canvas", imgMain);
        imgMain.delete();
        console.log("imshow complete");

        // rgb img
        document.getElementById("rgb-img-btn") = function(){
            console.log("RGB Button Clicked");
            let imgMain = cv.imread("main-img");
            cv.imshow("main-canvas", imgMain);
            imgMain.delete();
        }

        // grayscale img
        document.getElementById("rgb-img-btn") = function(){
            console.log("Grayscale Button Clicked")
            let imgMain = cv.imread("main-img");
            let imgGray = new cv.Mat();
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY);
            cv.imshow("main-canvas", imgGray);
            imgGray.delete();
            imgMain.delete();
        }

        // canny edges img
        document.getElementById("edge-img-btn") = function(){
            console.log("Canny Button Clicked");
            let imgMain = cv.imread("main-img");
            let imgGray = new cv.Mat();
            cv.cvtColor(imgGray, imgCanny, cv.COLOR_RGBA2GRAY);
            let imgCanny = new cv.Mat();
            let lowerThreshold = 100;
            let upperThreshold = 250;
            cv.Canny(imgMain, imgGray, lowerThreshold, upperThreshold);
            cv.imshow("main-canvas", imgCanny);
            imgMain.delete();
            imgGray.delete();
            imgCanny.delete();
        }

        // contour img
        document.getElementById("shape-img-btn") = function(){
            console.log("Shape Button Clicked");
            let imgMain = cv.imread("main-img");
            let imgGray = new cv.Mat();
            cv.cvtColor(imgGray, imgCanny, cv.COLOR_RGBA2GRAY);
            let imgCanny = new cv.Mat();
            let lowerThreshold = 100;
            let upperThreshold = 250;
            cv.Canny(imgMain, imgGray, lowerThreshold, upperThreshold);
            let contour = new cv.MatVector();
            let hierarchy = new cv.Mat();
            cv.findContours(imgCanny, contour, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
            let length = contour.size();
            console.log("Length area of contour: ", length);
            let cloneImg = imgMain.clone();
            for(let i =0; i<length; i++){
                cv.drawContours(cloneImg, contour, i, new cv.Scalar(0,255,0,255), cv.LINE_8, hierarchy, 0);
            }
            cv.imshow("main-canvas", cloneImg);
            imgMain.delete();
            imgGray.delete();
            imgCanny.delete();
            contour.delete();
            hierarchy.delete();
            cloneImg.delete();

        }
        




    }
}