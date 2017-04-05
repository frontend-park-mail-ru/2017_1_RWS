export default class baseComponent {
    constructor(renderTemplate, options) {
        this.content = document.createElement('div');
        this.options = options;
        this.renderTemplate = renderTemplate;
        this.render(this.renderTemplate);
    }

    render(renderTemplate) {
        //to override
    }
}
