import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'
import { withPrefix } from 'gatsby'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hugo Nogueira',
      position: 'Engineering Lead @ BCG Digital Ventures',
      phone: '+49 151 74477807',
      email: 'hello@hugomagalhaes.com',
      website: 'https://www.hugomagalhaes.com',
      avatarUrl: 'https://en.gravatar.com/userimage/3785887/dafb6496cb2175e675b2ec1f9254802d.jpg?size=100',
      facebook: 'https://facebook.hugomagalhaes.com',
      linkedin: 'https://linkedin.hugomagalhaes.com',
      twitter: 'https://twitter.hugomagalhaes.com'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={['signature', 'free', 'react']} />

        <div className={styles.container}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.avatar}>
                  <img src={this.state.avatarUrl} />
                </td>
                <td className={styles.info} >
                  <div className={styles.nameRow}>
                    {this.state.name}
                  </div>
                  <div className={styles.position}>
                    {this.state.position}
                  </div>
                  <div className={styles.phone}>
                    <span className={styles.phoneTitle}>p</span>
                    {this.state.phone}
                  </div>
                  <div className={styles.email}>
                    <span className={styles.emailTitle}>e</span>
                    <a href={`mailto:${this.state.email}`} className={styles.email}>
                      {this.state.email}
                    </a>
                  </div>
                  <div className={styles.website}>
                    <span className={styles.websiteTitle}>w</span>
                    <a href={this.state.website} className={styles.website}>{this.state.website}</a>
                  </div>

                  <div className={styles.social}>
                    <a className={styles.icon} href={this.state.linkedin}>
                      <img alt="LinkedIn" src={withPrefix('/social/LinkedIN.svg')} />
                    </a>
                    <a className={styles.icon} href={this.state.twitter}>
                      <img alt="Twitter" src={withPrefix('/social/Twitter.svg')} />
                    </a>
                    <a className={styles.icon} href={this.state.facebook}>
                      <img alt="Facebook" src={withPrefix('/social/Facebook.svg')} />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Configuration:</h3>

        <div id='inputs'>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input value={this.state.name} name='name' onChange={this.handleChange} ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Position:</label>
                </td>
                <td>
                  <input name='position' value={this.state.position} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone:</label>
                </td>
                <td>
                  <input name='phone' value={this.state.phone} onChange={this.handleChange}></input>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input name='email' value={this.state.email} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Website:</label>
                </td>
                <td>
                  <input name='website' value={this.state.website} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Avatar URL:</label>
                </td>
                <td>
                  <input name='avatarUrl' value={this.state.avatarUrl} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Linkedin:</label>
                </td>
                <td>
                  <input name='linkedin' value={this.state.linkedin} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Twitter:</label>
                </td>
                <td>
                  <input name='twitter' value={this.state.twitter} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Facebook:</label>
                </td>
                <td>
                  <input name='facebook' value={this.state.facebook} onChange={this.handleChange}></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
