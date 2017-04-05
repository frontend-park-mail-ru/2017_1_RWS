import baseComponent from './baseComponent'

export default class About extends baseComponent {
    render () {
        this.content.innerHTML = this.renderTemplate;
    }
}

