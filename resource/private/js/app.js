// Class loading
LightURL = (typeof LightURL === 'object') ? LightURL : {};
LightURL.Redirection = (typeof LightURL.Redirection === 'object') ? LightURL.Redirection : {};

LightURL.Redirection = function()
{
    // Parameters
    this.alias = null;
    this.url = null;
    this.timeTotal = 10;
    this.timeLeft = 10;
    this.timeOut = null;

    // HTML selectors
    this.progressBar = '#progressBar > .progress-bar';
    this.buttonStop = '#buttonStop';
    this.qrCode = '#qrCode';
};

LightURL.Redirection.prototype = {
    /**
     * Start redirection time out
     */
    start: function()
    {
        var that = this;

        this.timeOut = setInterval(function() {
            if (that.timeLeft >= 0) {
                jQuery(that.progressBar).animate({
                    width: ((that.timeTotal - that.timeLeft) * 10) + '%'
                }, 100);
                jQuery(this.buttonStop).children('.timer').text(that.timeLeft);
                that.timeLeft--;
            } else {
                clearInterval(that.timeOut);
                document.location.href = that.url;
            }
        }, 1000);

        jQuery(this.buttonStop).click(function() {
            that.stop();
        });
    },
    /**
     * Stop redirectiopn time out
     */
    stop: function()
    {
        clearInterval(this.timeOut);
        jQuery(this.progressBar)
                .stop()
                .removeClass('active')
                .addClass('progress-bar-disable');
        jQuery(this.buttonStop).remove();
    },
    /**
     * Generate QR code
     * @param {type} url    URL to be encoded
     */
    generateQR: function(url)
    {
        if (this.alias !== null) {
            jQuery(this.qrCode).qrcode(url);
        }
    }
};
