import baseComponent from './baseComponent'

export default class Menu extends baseComponent {
    render() {
        this.content.innerHTML = this.renderTemplate;
    }
}

