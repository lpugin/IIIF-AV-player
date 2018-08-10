import $ from 'jquery';

var defaultCanvasWidth = 600,
    defaultCanvasHeight = 400;

export class Canvas
{
    constructor (canvasInfo)
    {
        this.url = canvasInfo.id;
        this.type = canvasInfo.type;
        this.label = canvasInfo.label || "Label";
        this.duration = canvasInfo.duration;

        this.annotationItems = [];
        this.isActive = false;

        if (!canvasInfo.width)
        {
            this.width = defaultCanvasWidth;
        }
        else
        {
            this.width = canvasInfo.width;
        }
        
        if (!canvasInfo.height)
        {
            this.height = defaultCanvasHeight;
        }
        else
        {
            this.height = canvasInfo.height;
        }
    }

    render()
    {
        let annotationContainer = $('<div class="annotationContainer"></div>');
        for (var i = 0; i < this.annotationItems.length; i++)
        {
            this.annotationItems[i].render();
            annotationContainer.append(this.annotationItems[i].mediaElement);
        }

        let canvas = $('<div class="canvas"></div>');
        canvas.width(this.width);
        canvas.height(this.height);
        canvas.append(annotationContainer);
        $('.canvasContainer').append(canvas);

        return;
    }
}