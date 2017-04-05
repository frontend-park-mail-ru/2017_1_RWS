import baseComponent from './baseComponent'

class Rating extends baseComponent {
    render(renderTemplate) {
        //this._updateHtml()
        this.content.innerHTML = renderTemplate;
    }
}


