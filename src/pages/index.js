import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['signature', 'free', 'react']} />

    <div id='signature_1_container' className={styles.container}>
      <table cellspacing="0" cellpadding="0px;" id='signature_1' className={styles.table}>
        <tr>
          <td rowspan="3" className={styles.avatarRow}>
            <img src="https://en.gravatar.com/userimage/3785887/dafb6496cb2175e675b2ec1f9254802d.jpg?size=100" className={styles.avatar} />
          </td>
      <td className={styles.nameRow} >
            <span class="name" className={styles.name}>
              Hugo Nogueira
        </span><br />
            <span class="position">
              Engineering Lead
        </span>
            <br />
            <span className={styles.phone}>f</span>
            <span class="fax">
              (888) 666-6666
        </span>
            <br />
            <span className={styles.emailRow}>
              <span className={styles.emailTitle}>e</span>
              <a class="email" href="mailto:vader@hugomagalhaes.com" className={styles.email}>
                hello@hugomagalhaes.com
          </a>
            </span><br />
            <span className={styles.website}>
              <span className={styles.websiteTitle}>w</span>
              <a href="https://www.hugomagalhaes.com" className={styles.website}>https://www.hugomagalhaes.com</a>
            </span><br />

            {/* <div className={styles.social}>
              <a className={styles.icon} href="https://twitter.com/pureenergiesUS"><img alt="Twitter" src="http://hugomagalhaes.com/us/files/2014/04/twitter.png" /></a>

              <a className={styles.icon} href="https://www.facebook.com/pureenergies"><img alt="Facebook" src="http://hugomagalhaes.com/us/files/2014/04/fb.png" /></a>

              <a className={styles.icon} href="https://www.linkedin.com/company/pure-energies"><img alt="LinkedIn" src="http://hugomagalhaes.com/us/files/2014/04/linkedin.png" /></a>

              <a className={styles.icon} href="https://plus.google.com/105035082847538286780/posts"><img alt="Google+" src="http://hugomagalhaes.com/us/files/2014/04/google.png" /></a>

              <a className={styles.icon} href="https://www.youtube.com/user/oneblockoffthegrid"><img alt="YouTube" src="http://hugomagalhaes.com/us/files/2014/04/youtube.png" /></a>

              <a className={styles.icon} href="https://www.pinterest.com/pureen/"><img alt="Pinterest" src="http://hugomagalhaes.com/us/files/2014/04/pinterest.png" /></a>
            </div> */}
          </td>
        </tr>
      </table>
    </div>

    {/* <div class='controls' data-sig='signature_1'>
      <button class='select'>Select Signature (for Gmail)</button><br />
      <button class='save'>Prepare HTML (for Outlook)</button>
      <a download='NRG_signature.htm'>Save HTML to file</a>
    </div> */}

    <h3>Configuration:</h3>

    <div id='inputs'>
      <table>
        <tr>
          <td>
            <label for='name'>Name:</label>
          </td>
          <td>
            <input id='name' placeholder='Hugo Nogueira'></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for='position'>Position:</label>
          </td>
          <td>
            <input id='position' placeholder='Engineering Lead'></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for='phone'>Phone:</label>
          </td>
          <td>
            <input id='phone' placeholder='+49 155 5555555'></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for='cell'>Cell phone:</label>
          </td>
          <td>
            <input id='cell' placeholder="+49 155 5555555"></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for='fax'>Fax:</label>
          </td>
          <td>
            <input id='fax' placeholder='+49 155 5555555'></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for='email'>Email:</label>
          </td>
          <td>
            <input id='email' placeholder='hello@hugomagalhaes.com'></input>
          </td>
        </tr>
      </table>
    </div>
    
  </Layout>
)

export default IndexPage
