import baseComponent from './baseComponent'

class Rating extends baseComponent {
    render() {
        //this._updateHtml()
        this.content.innerHTML = this.renderTemplate;
    }
}


