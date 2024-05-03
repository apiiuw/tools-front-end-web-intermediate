import { LitElement, html, css } from 'lit'

class FiiFooter extends LitElement {
  static styles = css`
    .main-footer {
      color: salmon;
      background-color: black;
      padding: 1rem;
    }

    .container {
      text-align: center;
    }
  `

  render() {
    const date = new Date()
    const year = date.getFullYear()

    return html`
      <div class="main-footer">
        <div class="container">&copy; ${year} Copyright | 2210501029@mahasiswa.upnvj.ac.id</div>
      </div>
    `
  }
}
customElements.define('fii-foo', FiiFooter)
