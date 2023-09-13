import nodemailer from 'nodemailer';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, email, phone } = req.body;

  // Заменить письмо на другое

  const transporter = nodemailer.createTransport({
    host: 'smtp.beget.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_LOGIN,
      pass: process.env.MAIL_PASSWORD
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: '"RIVRENT - Сообщение с сайта" <car@rivrent.ru>',
      to: `car@rivrent.ru`,
      subject: `Сообщение от пользователя ${name ? name : ''}`,
      html:
        `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title></title>
          <style type="text/css">
            @media only screen and (max-width: 640px) {
              .sp-hidden-mob {
                display: none !important;
              }
            }
          </style>
          <style type="text/css">
            table,
            td {
              border-collapse: collapse;
            }
            img {
              height: auto;
              line-height: 100%;
              outline: 0;
              -ms-interpolation-mode: bicubic;
            }
            a,
            img {
              text-decoration: none;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            p {
              line-height: 1.5;
              margin: 0 0 10px;
            }
            ul > li {
              mso-special-format: bullet;
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
              line-height: 1.2;
              font-weight: 400;
            }
            h1 {
              font-size: 36px;
            }
            h2 {
              font-size: 30px;
            }
            h3 {
              font-size: 24px;
            }
            h4 {
              font-size: 20px;
            }
            h5,
            p {
              font-size: 14px;
            }
            hr {
              margin: 0;
            }
            th.social_element,
            th.tc {
              font-weight: 400;
              text-align: left;
            }
            td,
            th,
            tr {
              border-color: transparent;
            }
            .content-cell {
              vertical-align: top;
            }
            .content-cell table.social,
            .content-cell table.social table,
            .content-cell table.social td,
            .content-cell table.social th,
            .content-cell table.sp-button,
            .content-cell table.sp-button table,
            .content-cell table.sp-button td,
            .content-cell table.sp-button th,
            img {
              border: 0;
            }
            #outlook a,
            .content-cell table.social td,
            .content-cell table.social th,
            .content-cell table.sp-button td,
            .content-cell table.sp-button th {
              padding: 0;
            }
            .content-cell .sp-button table td,
            .content-cell table.social {
              line-height: 1;
            }
            .content-cell > center > .sp-button {
              margin-left: auto;
              margin-right: auto;
            }
            .content-cell .social,
            .content-cell .social_element,
            .content-cell .sp-button-side-padding,
            .content-cell .sp-button-text {
              border-color: transparent;
              border-width: 0;
              border-style: none;
            }
            .content-cell .sp-button-side-padding {
              width: 21px;
            }
            .content-cell .sp-button-text a {
              text-decoration: none;
              display: block;
            }
            .content-cell .sp-button-text a img,
            .sp-video img {
              max-width: 100%;
            }
            .content-cell em,
            .content-cell span[style*="color"] > a,
            .email-text em,
            .email-wrapper span[style*="color"] > a {
              color: inherit;
            }
            .content-cell > div > .sp-img,
            .content-cell > div > a > .sp-img,
            body {
              margin: 0;
            }
            .content-cell .link_img,
            .content-cell table.social .social_element img.social,
            .social_element img.social,
            .sp-video a {
              display: block;
            }
            .content-cell .sp-button-img td {
              display: table-cell !important;
              width: initial !important;
            }
            .content-cell > p,
            .email-text > p {
              line-height: inherit;
              color: inherit;
              font-size: inherit;
            }
            .content-cell > table,
            .content-cell > table > tbody > tr > td,
            .content-cell > table > tbody > tr > th,
            .content-cell > table > tr > td,
            .content-cell > table > tr > th,
            .email-text > table,
            .email-text > table > tbody > tr > td,
            .email-text > table > tbody > tr > th,
            .email-text > table > tr > td,
            .email-text > table > tr > th {
              border-color: #ddd;
              border-width: 1px;
              border-style: solid;
            }
            .content-cell > table td,
            .content-cell > table th,
            .email-text > table td,
            .email-text > table th {
              padding: 3px;
            }
            .content-cell table.social .social_element,
            .social_element {
              padding: 2px 5px;
              font-size: 13px;
              font-family: Arial, sans-serif;
              line-height: 32px;
            }
            .content-cell table.social .social_element_t_3 img.social,
            .content-cell table.social .social_element_t_4 img.social,
            .content-cell table.social .social_element_t_5 img.social,
            .content-cell table.social .social_element_v_i_t img.social {
              display: inline;
            }
            .email-text table th {
              text-align: center;
            }
            .email-text pre {
              background-color: transparent;
              border: 0;
              color: inherit;
              padding: 0;
              margin: 1em 0;
            }
            .sp-video a {
              overflow: auto;
            }
            @media only screen and (max-width: 640px) {
              .sp-hidden-mob {
                display: none !important;
              }
            }
            body {
              padding: 0;
            }
            * {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              mso-table-lspace: 0;
              mso-table-rspace: 0;
            }
            .ExternalClass,
            .ReadMsgBody {
              width: 100%;
            }
            .ExternalClass * {
              line-height: 100%;
            }
            table {
              margin-bottom: 0 !important;
              border-color: transparent;
            }
            u ~ div .gmail-hide {
              display: none;
            }
            u ~ div .gmail-show {
              display: block !important;
            }
            @media yahoo {
              .yahoo-hide {
                display: none;
              }
              .yahoo-show {
                display: block !important;
              }
            }
            .im {
              color: inherit !important;
            }
            td[class^="xfmc"] {
              width: inherit !important;
            }
            @media only screen and (max-width: 640px) {
              .wrapper-table {
                min-width: 296px;
              }
              .sp-demo-label-link {
                display: block;
              }
              td,
              th {
                margin-bottom: 0;
                height: inherit !important;
              }
              td.content-cell,
              th.content-cell {
                padding: 15px !important;
              }
              table.email-checkout.email-checkout-yandex,
              td.content-cell .social,
              th.content-cell .social {
                width: auto !important;
              }
              td.content-cell .share th,
              td.content-cell .social td .share td,
              td.content-cell .social th,
              th.content-cell .share th,
              th.content-cell .social td .share td,
              th.content-cell .social th {
                display: inline-block !important;
              }
              td,
              td.content-cell .share th.social_element_t_3,
              td.content-cell .share th.social_element_t_4,
              td.content-cell .social td .share td.social_element_t_3,
              td.content-cell .social td .share td.social_element_t_4,
              td.content-cell .social th.social_element_t_3,
              td.content-cell .social th.social_element_t_4,
              th,
              th.content-cell .share th.social_element_t_3,
              th.content-cell .share th.social_element_t_4,
              th.content-cell .social td .share td.social_element_t_3,
              th.content-cell .social td .share td.social_element_t_4,
              th.content-cell .social th.social_element_t_3,
              th.content-cell .social th.social_element_t_4 {
                display: block !important;
              }
              td.content-cell .share th a > img,
              td.content-cell .social td .share td a > img,
              td.content-cell .social th a > img,
              th.content-cell .share th a > img,
              th.content-cell .social td .share td a > img,
              th.content-cell .social th a > img {
                width: 32px !important;
                height: 32px !important;
              }
              td.content-cell > td,
              th.content-cell > td {
                width: 100%;
              }
              td.content-cell > p,
              th.content-cell > p {
                width: 100% !important;
              }
              td.content-cell.padding-lr-0,
              th.content-cell.padding-lr-0 {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              td.content-cell.padding-top-0,
              th.content-cell.padding-top-0 {
                padding-top: 0 !important;
              }
              td.content-cell.padding-bottom-0,
              th.content-cell.padding-bottom-0 {
                padding-bottom: 0 !important;
              }
              .sp-video {
                padding-left: 15px !important;
                padding-right: 15px !important;
              }
              .wrapper-table > tbody > tr > td {
                padding: 0;
              }
              .block-divider {
                padding: 2px 15px !important;
              }
              .social_share {
                width: 16px !important;
                height: 16px !important;
              }
              .sp-button td {
                display: table-cell !important;
                width: initial !important;
              }
              .sp-button td.sp-button-side-padding {
                width: 21px !important;
              }
              input {
                max-width: 100% !important;
              }
              table {
                border-width: 1px;
              }
              .tc {
                width: 100% !important;
              }
              .inline-item,
              table.smallImg td.smallImg {
                display: inline !important;
              }
              table.origin-table {
                width: 95% !important;
              }
              table.origin-table td {
                display: table-cell !important;
                padding: 0 !important;
              }
              .p100_img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
              }
              table.social {
                width: initial !important;
              }
            }
            @media only screen and (max-width: 640px) and screen and (-ms-high-contrast: active),
              only screen and (max-width: 640px) and (-ms-high-contrast: none) {
              td,
              th {
                float: left;
                width: 100%;
                clear: both;
              }
              .content-cell img,
              img:not(.p100_img) {
                width: auto;
                height: auto;
                max-width: 269px !important;
                margin-right: auto;
                display: block !important;
                margin-left: auto;
              }
            }
            .content-cell {
              word-break: break-word;
            }
            .content-cell * {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            .rollover {
              font-size: 0;
            }
            @media only screen and (max-width: 640px) {
              .rollover img.sp-img.desktop,
              .rollover img.sp-img.desktop.rollover-first,
              .rollover img.sp-img.desktop.rollover-second,
              img.sp-img.desktop {
                display: none !important;
              }
              img.sp-img.mobile {
                display: block !important;
              }
            }
            @media only screen and (min-width: 641px) {
              .rollover img.sp-img.mobile,
              .rollover img.sp-img.mobile.rollover-first,
              .rollover img.sp-img.mobile.rollover-second {
                display: none !important;
              }
            }
            .rollover:hover .desktop.rollover-first,
            .rollover:hover .mobile.rollover-first {
              max-height: 0 !important;
              display: none !important;
            }
            .rollover .desktop.rollover-second,
            .rollover .mobile.rollover-second {
              max-height: 0 !important;
              display: none !important;
            }
            .rollover:hover .desktop.rollover-second,
            .rollover:hover .mobile.rollover-second {
              max-height: none !important;
              display: block !important;
              object-fit: cover;
            }
            td.content-cell .social th {
              display: inline-block !important;
            }
            @media only screen and (max-width: 640px) {
              table {
                width: 100% !important;
              }
              table,
              hr {
                width: 100%;
                max-width: 100% !important;
              }
              td,
              div {
                width: 100% !important;
                height: auto !important;
                box-sizing: border-box;
              }
              td,
              th {
                display: block !important;
                margin-bottom: 0;
                height: inherit !important;
              }
            }
          </style>
        </head>
        <body
          style="
            color: #444;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
          "
        >
          <table
            class="wrapper-table"
            cellpadding="5"
            cellspacing="0"
            width="100%"
            border="0"
            style="
              border-collapse: collapse;
              font-size: 14px;
              line-height: 1.5;
              background-color: #eee;
              background-repeat: no-repeat;
              background-position: left top;
            "
            bgcolor="#eeeeee"
          >
            <tr style="border-color: transparent">
              <td
                align="center"
                style="border-collapse: collapse; border-color: transparent"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="600px"
                  id="bodyTable"
                  border="0"
                  bgcolor="#ffffff"
                  style="border-collapse: collapse; font-size: 14px; line-height: 1.5"
                >
                  <tr style="border-color: transparent">
                    <td
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse; border-color: transparent"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    class="separator"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      padding-left: 0;
                                      padding-right: 0;
                                      padding-top: 0;
                                      padding-bottom: 0;
                                      height: 20px;
                                    "
                                    height="20"
                                  >
                                    <tr style="border-color: transparent">
                                      <td
                                        height="20"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                        "
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_2_element_0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-lr-0 padding-top-0 padding-bottom-0"
                                        width="600"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 0;
                                          padding-right: 0;
                                          padding-top: 0;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <div
                                          id="wout_block_2_element_0"
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            width: 100%;
                                            height: 62;
                                            display: block;
                                            text-align: center;
                                          "
                                          width="100%"
                                          height="62"
                                          align="center"
                                        >
                                          <center>
                                            <img
                                              border="0"
                                              width="268"
                                              height="auto"
                                              class="desktop sp-img small_img"
                                              align="center"
                                              alt="Логотип компании RIV RENT"
                                              src="https://i.ibb.co/SnG1tNG/123.jpg"
                                              iout_block_2_element_0
                                              style="
                                                height: auto;
                                                line-height: 100%;
                                                outline: 0;
                                                text-decoration: none;
                                                border: 0;
                                                display: block;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                            /><!--[if !mso]><!-->
                                            <div
                                              style="
                                                font-size: 14px;
                                                line-height: 1.5;
                                                mso-hide: all;
                                              "
                                            >
                                              <img
                                                border="0"
                                                width="100%"
                                                height="auto"
                                                class="mobile sp-img small_img"
                                                align="center"
                                                alt="Логотип компании RIV RENT"
                                                src="https://i.ibb.co/SnG1tNG/123.jpg"
                                                iout_block_2_element_0
                                                style="
                                                  height: auto;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  text-decoration: none;
                                                  border: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  display: none;
                                                  width: 100%;
                                                  max-width: 187.95px !important;
                                                "
                                              />
                                            </div>
                                            <!--<![endif]-->
                                          </center>
                                        </div>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    class="separator"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      padding-left: 0;
                                      padding-right: 0;
                                      padding-top: 0;
                                      padding-bottom: 0;
                                      height: 20px;
                                    "
                                    height="20"
                                  >
                                    <tr style="border-color: transparent">
                                      <td
                                        height="20"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                        "
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_4_element_0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-lr-0 padding-top-0 padding-bottom-0"
                                        width="600"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 0;
                                          padding-right: 0;
                                          padding-top: 0;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <div
                                          id="wout_block_4_element_0"
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            width: 100%;
                                            height: 450;
                                            display: block;
                                          "
                                          width="100%"
                                          height="450"
                                        >
                                          <img
                                            border="0"
                                            width="600"
                                            height="auto"
                                            class="desktop sp-img"
                                            align="left"
                                            alt="Bez_nazvaniya"
                                            src="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg"
                                            iout_block_4_element_0
                                            style="
                                              height: auto;
                                              line-height: 100%;
                                              outline: 0;
                                              text-decoration: none;
                                              border: 0;
                                              margin: 0;
                                              display: block;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                          /><!--[if !mso]><!-->
                                          <div
                                            style="
                                              font-size: 14px;
                                              line-height: 1.5;
                                              mso-hide: all;
                                            "
                                          >
                                            <img
                                              border="0"
                                              width="100%"
                                              height="auto"
                                              class="mobile sp-img"
                                              align="left"
                                              alt="Bez_nazvaniya"
                                              src="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg"
                                              iout_block_4_element_0
                                              style="
                                                height: auto;
                                                line-height: 100%;
                                                outline: 0;
                                                text-decoration: none;
                                                border: 0;
                                                -ms-interpolation-mode: bicubic;
                                                display: none;
                                                width: 100%;
                                                max-width: 100% !important;
                                              "
                                            />
                                          </div>
                                          <!--<![endif]-->
                                        </div>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_out_block_5"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      text-color: black;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        'Neue Haas Grotesk Text Pro', Arial,
                                        sans-serif;
                                      font-family-short: helvetica;
                                      font-weight: normal;
                                      margin: 0;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell"
                                        width="540"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          padding-top: 35px;
                                          padding-bottom: 30px;
                                        "
                                        valign="top"
                                      >
                                        <h4
                                          style="
                                            line-height: 1.2;
                                            margin: 0 0 10px;
                                            font-weight: normal;
                                            font-size: 20px;
                                            color: #444;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                          "
                                        >
                                          <span style="font-size: 20px"
                                            ><strong
                                              >Сообщение от клиента!</strong
                                            ></span
                                          >
                                        </h4>
                                        <p
                                          style="
                                            line-height: inherit;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                        >
                                          <span style="color: #808080"
                                            >Клиент${name ? `- ${name},` : ''} оставил заявку на обратную связь! Перезвоните ему как можно быстрее!</span
                                          ><span style="color: #808080"></span>
                                        </p>
                                        <p
                                          style="
                                            line-height: inherit;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                        >
                                          <span style="font-size: 16px"
                                            ><strong>Информация:</strong></span
                                          >
                                        </p>
                                        ${name ? `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Имя: ${name}</span
                                                  >
                                                </p>
                                                ` : ''}
                                                ${email ? `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Email:&nbsp;<a
                                                      href="https://e.mail.ru/compose?To=KonstantinAchapin@mail.ru"
                                                      style="
                                                        text-decoration: none;
                                                        color: #808080;
                                                      "
                                                      >${email}</a
                                                    ></span>
                                                </p>
                                                ` : ''}
                                                ${phone && `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Телефон:&nbsp;${phone}</span
                                                  >
                                                </p>
                                                `}
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #333;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#333333"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_out_block_22"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      text-color: black;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        'Neue Haas Grotesk Text Pro', Arial,
                                        sans-serif;
                                      font-family-short: helvetica;
                                      font-weight: normal;
                                      margin: 0;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-bottom-0"
                                        width="570"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <p
                                          style="
                                            line-height: 1;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            text-align: center;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                          align="center"
                                        >
                                          <span style="color: #ffffff"
                                            >Мы всегда на связи:</span
                                          >
                                        </p>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #333;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#333333"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      size: 32px;
                                      order: 1;
                                      text-align: center;
                                      overflow: hidden;
                                    "
                                    align="center"
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-top-0"
                                        width="570"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 0;
                                          padding-bottom: 15px;
                                        "
                                        valign="top"
                                      >
                                        <table
                                          class="social"
                                          cellpadding="5"
                                          border="0"
                                          cellspacing="0"
                                          style="
                                            border-collapse: collapse;
                                            font-size: 14px;
                                            line-height: 1;
                                            border-color: transparent;
                                            border-width: 0;
                                            border-style: none;
                                            border: 0;
                                            display: inline-block;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr style="border-color: transparent">
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://wa.me/79520524700"
                                                style="
                                                  text-decoration: none;
                                                  color: #0089bf;
                                                "
                                                ><img
                                                  border="0"
                                                  alt="Telegram"
                                                  class="social small_img smallImg"
                                                  style="
                                                    height: auto;
                                                    line-height: 100%;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    border: 0;
                                                    border-color: transparent;
                                                    border-width: 0;
                                                    border-style: none;
                                                    display: block;
                                                    margin: 5px;
                                                  "
                                                  vspace="5"
                                                  hspace="5"
                                                  title="Telegram"
                                                  width="32"
                                                  height="auto"
                                                  src="https://s7845926.sendpul.se/img/constructor/social/round/telegram.png"
                                              /></a>
                                            </th>
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://t.me/BubbleGum39"
                                                style="
                                                  text-decoration: none;
                                                  color: #0089bf;
                                                "
                                                ><img
                                                  border="0"
                                                  alt="WhatsApp"
                                                  class="social small_img smallImg"
                                                  style="
                                                    height: auto;
                                                    line-height: 100%;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    border: 0;
                                                    border-color: transparent;
                                                    border-width: 0;
                                                    border-style: none;
                                                    display: block;
                                                    margin: 5px;
                                                  "
                                                  vspace="5"
                                                  hspace="5"
                                                  title="WhatsApp"
                                                  width="32"
                                                  height="auto"
                                                  src="https://s7845926.sendpul.se/img/constructor/social/round/whatsapp.png"
                                              /></a>
                                            </th>
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                            </th>
                                          </tr>
                                        </table>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  width="600px"
                  style="border-collapse: collapse; font-size: 14px; line-height: 1.5"
                ></table>
              </td>
            </tr>
          </table>
        </body>
      </html>`
    })

    const emailUserRes = await transporter.sendMail({
      from: '"RIVRENT" <car@rivrent.ru>',
      to: `${email}`,
      subject: `Мы получили ваше сообщение и cкоро дадим вам ответ!`,
      html:
        `<html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title></title>
          <style type="text/css">
            @media only screen and (max-width: 640px) {
              .sp-hidden-mob {
                display: none !important;
              }
            }
          </style>
          <style type="text/css">
            table,
            td {
              border-collapse: collapse;
            }
            img {
              height: auto;
              line-height: 100%;
              outline: 0;
              -ms-interpolation-mode: bicubic;
            }
            a,
            img {
              text-decoration: none;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            p {
              line-height: 1.5;
              margin: 0 0 10px;
            }
            ul > li {
              mso-special-format: bullet;
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
              line-height: 1.2;
              font-weight: 400;
            }
            h1 {
              font-size: 36px;
            }
            h2 {
              font-size: 30px;
            }
            h3 {
              font-size: 24px;
            }
            h4 {
              font-size: 20px;
            }
            h5,
            p {
              font-size: 14px;
            }
            hr {
              margin: 0;
            }
            th.social_element,
            th.tc {
              font-weight: 400;
              text-align: left;
            }
            td,
            th,
            tr {
              border-color: transparent;
            }
            .content-cell {
              vertical-align: top;
            }
            .content-cell table.social,
            .content-cell table.social table,
            .content-cell table.social td,
            .content-cell table.social th,
            .content-cell table.sp-button,
            .content-cell table.sp-button table,
            .content-cell table.sp-button td,
            .content-cell table.sp-button th,
            img {
              border: 0;
            }
            #outlook a,
            .content-cell table.social td,
            .content-cell table.social th,
            .content-cell table.sp-button td,
            .content-cell table.sp-button th {
              padding: 0;
            }
            .content-cell .sp-button table td,
            .content-cell table.social {
              line-height: 1;
            }
            .content-cell > center > .sp-button {
              margin-left: auto;
              margin-right: auto;
            }
            .content-cell .social,
            .content-cell .social_element,
            .content-cell .sp-button-side-padding,
            .content-cell .sp-button-text {
              border-color: transparent;
              border-width: 0;
              border-style: none;
            }
            .content-cell .sp-button-side-padding {
              width: 21px;
            }
            .content-cell .sp-button-text a {
              text-decoration: none;
              display: block;
            }
            .content-cell .sp-button-text a img,
            .sp-video img {
              max-width: 100%;
            }
            .content-cell em,
            .content-cell span[style*="color"] > a,
            .email-text em,
            .email-wrapper span[style*="color"] > a {
              color: inherit;
            }
            .content-cell > div > .sp-img,
            .content-cell > div > a > .sp-img,
            body {
              margin: 0;
            }
            .content-cell .link_img,
            .content-cell table.social .social_element img.social,
            .social_element img.social,
            .sp-video a {
              display: block;
            }
            .content-cell .sp-button-img td {
              display: table-cell !important;
              width: initial !important;
            }
            .content-cell > p,
            .email-text > p {
              line-height: inherit;
              color: inherit;
              font-size: inherit;
            }
            .content-cell > table,
            .content-cell > table > tbody > tr > td,
            .content-cell > table > tbody > tr > th,
            .content-cell > table > tr > td,
            .content-cell > table > tr > th,
            .email-text > table,
            .email-text > table > tbody > tr > td,
            .email-text > table > tbody > tr > th,
            .email-text > table > tr > td,
            .email-text > table > tr > th {
              border-color: #ddd;
              border-width: 1px;
              border-style: solid;
            }
            .content-cell > table td,
            .content-cell > table th,
            .email-text > table td,
            .email-text > table th {
              padding: 3px;
            }
            .content-cell table.social .social_element,
            .social_element {
              padding: 2px 5px;
              font-size: 13px;
              font-family: Arial, sans-serif;
              line-height: 32px;
            }
            .content-cell table.social .social_element_t_3 img.social,
            .content-cell table.social .social_element_t_4 img.social,
            .content-cell table.social .social_element_t_5 img.social,
            .content-cell table.social .social_element_v_i_t img.social {
              display: inline;
            }
            .email-text table th {
              text-align: center;
            }
            .email-text pre {
              background-color: transparent;
              border: 0;
              color: inherit;
              padding: 0;
              margin: 1em 0;
            }
            .sp-video a {
              overflow: auto;
            }
            @media only screen and (max-width: 640px) {
              .sp-hidden-mob {
                display: none !important;
              }
            }
            body {
              padding: 0;
            }
            * {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table,
            td {
              mso-table-lspace: 0;
              mso-table-rspace: 0;
            }
            .ExternalClass,
            .ReadMsgBody {
              width: 100%;
            }
            .ExternalClass * {
              line-height: 100%;
            }
            table {
              margin-bottom: 0 !important;
              border-color: transparent;
            }
            u ~ div .gmail-hide {
              display: none;
            }
            u ~ div .gmail-show {
              display: block !important;
            }
            @media yahoo {
              .yahoo-hide {
                display: none;
              }
              .yahoo-show {
                display: block !important;
              }
            }
            .im {
              color: inherit !important;
            }
            td[class^="xfmc"] {
              width: inherit !important;
            }
            @media only screen and (max-width: 640px) {
              .wrapper-table {
                min-width: 296px;
              }
              .sp-demo-label-link {
                display: block;
              }
              td,
              th {
                margin-bottom: 0;
                height: inherit !important;
              }
              td.content-cell,
              th.content-cell {
                padding: 15px !important;
              }
              table.email-checkout.email-checkout-yandex,
              td.content-cell .social,
              th.content-cell .social {
                width: auto !important;
              }
              td.content-cell .share th,
              td.content-cell .social td .share td,
              td.content-cell .social th,
              th.content-cell .share th,
              th.content-cell .social td .share td,
              th.content-cell .social th {
                display: inline-block !important;
              }
              td,
              td.content-cell .share th.social_element_t_3,
              td.content-cell .share th.social_element_t_4,
              td.content-cell .social td .share td.social_element_t_3,
              td.content-cell .social td .share td.social_element_t_4,
              td.content-cell .social th.social_element_t_3,
              td.content-cell .social th.social_element_t_4,
              th,
              th.content-cell .share th.social_element_t_3,
              th.content-cell .share th.social_element_t_4,
              th.content-cell .social td .share td.social_element_t_3,
              th.content-cell .social td .share td.social_element_t_4,
              th.content-cell .social th.social_element_t_3,
              th.content-cell .social th.social_element_t_4 {
                display: block !important;
              }
              td.content-cell .share th a > img,
              td.content-cell .social td .share td a > img,
              td.content-cell .social th a > img,
              th.content-cell .share th a > img,
              th.content-cell .social td .share td a > img,
              th.content-cell .social th a > img {
                width: 32px !important;
                height: 32px !important;
              }
              td.content-cell > td,
              th.content-cell > td {
                width: 100%;
              }
              td.content-cell > p,
              th.content-cell > p {
                width: 100% !important;
              }
              td.content-cell.padding-lr-0,
              th.content-cell.padding-lr-0 {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              td.content-cell.padding-top-0,
              th.content-cell.padding-top-0 {
                padding-top: 0 !important;
              }
              td.content-cell.padding-bottom-0,
              th.content-cell.padding-bottom-0 {
                padding-bottom: 0 !important;
              }
              .sp-video {
                padding-left: 15px !important;
                padding-right: 15px !important;
              }
              .wrapper-table > tbody > tr > td {
                padding: 0;
              }
              .block-divider {
                padding: 2px 15px !important;
              }
              .social_share {
                width: 16px !important;
                height: 16px !important;
              }
              .sp-button td {
                display: table-cell !important;
                width: initial !important;
              }
              .sp-button td.sp-button-side-padding {
                width: 21px !important;
              }
              input {
                max-width: 100% !important;
              }
              table {
                border-width: 1px;
              }
              .tc {
                width: 100% !important;
              }
              .inline-item,
              table.smallImg td.smallImg {
                display: inline !important;
              }
              table.origin-table {
                width: 95% !important;
              }
              table.origin-table td {
                display: table-cell !important;
                padding: 0 !important;
              }
              .p100_img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
              }
              table.social {
                width: initial !important;
              }
            }
            @media only screen and (max-width: 640px) and screen and (-ms-high-contrast: active),
              only screen and (max-width: 640px) and (-ms-high-contrast: none) {
              td,
              th {
                float: left;
                width: 100%;
                clear: both;
              }
              .content-cell img,
              img:not(.p100_img) {
                width: auto;
                height: auto;
                max-width: 269px !important;
                margin-right: auto;
                display: block !important;
                margin-left: auto;
              }
            }
            .content-cell {
              word-break: break-word;
            }
            .content-cell * {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            .rollover {
              font-size: 0;
            }
            @media only screen and (max-width: 640px) {
              .rollover img.sp-img.desktop,
              .rollover img.sp-img.desktop.rollover-first,
              .rollover img.sp-img.desktop.rollover-second,
              img.sp-img.desktop {
                display: none !important;
              }
              img.sp-img.mobile {
                display: block !important;
              }
            }
            @media only screen and (min-width: 641px) {
              .rollover img.sp-img.mobile,
              .rollover img.sp-img.mobile.rollover-first,
              .rollover img.sp-img.mobile.rollover-second {
                display: none !important;
              }
            }
            .rollover:hover .desktop.rollover-first,
            .rollover:hover .mobile.rollover-first {
              max-height: 0 !important;
              display: none !important;
            }
            .rollover .desktop.rollover-second,
            .rollover .mobile.rollover-second {
              max-height: 0 !important;
              display: none !important;
            }
            .rollover:hover .desktop.rollover-second,
            .rollover:hover .mobile.rollover-second {
              max-height: none !important;
              display: block !important;
              object-fit: cover;
            }
            td.content-cell .social th {
              display: inline-block !important;
            }
            @media only screen and (max-width: 640px) {
              table {
                width: 100% !important;
              }
              table,
              hr {
                width: 100%;
                max-width: 100% !important;
              }
              td,
              div {
                width: 100% !important;
                height: auto !important;
                box-sizing: border-box;
              }
              td,
              th {
                display: block !important;
                margin-bottom: 0;
                height: inherit !important;
              }
            }
          </style>
        </head>
        <body
          style="
            color: #444;
            font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
          "
        >
          <table
            class="wrapper-table"
            cellpadding="5"
            cellspacing="0"
            width="100%"
            border="0"
            style="
              border-collapse: collapse;
              font-size: 14px;
              line-height: 1.5;
              background-color: #eee;
              background-repeat: no-repeat;
              background-position: left top;
            "
            bgcolor="#eeeeee"
          >
            <tr style="border-color: transparent">
              <td
                align="center"
                style="border-collapse: collapse; border-color: transparent"
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="600px"
                  id="bodyTable"
                  border="0"
                  bgcolor="#ffffff"
                  style="border-collapse: collapse; font-size: 14px; line-height: 1.5"
                >
                  <tr style="border-color: transparent">
                    <td
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      style="border-collapse: collapse; border-color: transparent"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    class="separator"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      padding-left: 0;
                                      padding-right: 0;
                                      padding-top: 0;
                                      padding-bottom: 0;
                                      height: 20px;
                                    "
                                    height="20"
                                  >
                                    <tr style="border-color: transparent">
                                      <td
                                        height="20"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                        "
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_2_element_0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-lr-0 padding-top-0 padding-bottom-0"
                                        width="600"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 0;
                                          padding-right: 0;
                                          padding-top: 0;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <div
                                          id="wout_block_2_element_0"
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            width: 100%;
                                            height: 62;
                                            display: block;
                                            text-align: center;
                                          "
                                          width="100%"
                                          height="62"
                                          align="center"
                                        >
                                          <center>
                                            <img
                                              border="0"
                                              width="268"
                                              height="auto"
                                              class="desktop sp-img small_img"
                                              align="center"
                                              alt="Логотип компании RIV RENT"
                                              src="https://i.ibb.co/SnG1tNG/123.jpg"
                                              iout_block_2_element_0
                                              style="
                                                height: auto;
                                                line-height: 100%;
                                                outline: 0;
                                                text-decoration: none;
                                                border: 0;
                                                display: block;
                                                -ms-interpolation-mode: bicubic;
                                              "
                                            /><!--[if !mso]><!-->
                                            <div
                                              style="
                                                font-size: 14px;
                                                line-height: 1.5;
                                                mso-hide: all;
                                              "
                                            >
                                              <img
                                                border="0"
                                                width="100%"
                                                height="auto"
                                                class="mobile sp-img small_img"
                                                align="center"
                                                alt="Логотип компании RIV RENT"
                                                src="https://i.ibb.co/SnG1tNG/123.jpg"
                                                iout_block_2_element_0
                                                style="
                                                  height: auto;
                                                  line-height: 100%;
                                                  outline: 0;
                                                  text-decoration: none;
                                                  border: 0;
                                                  -ms-interpolation-mode: bicubic;
                                                  display: none;
                                                  width: 100%;
                                                  max-width: 187.95px !important;
                                                "
                                              />
                                            </div>
                                            <!--<![endif]-->
                                          </center>
                                        </div>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    class="separator"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      padding-left: 0;
                                      padding-right: 0;
                                      padding-top: 0;
                                      padding-bottom: 0;
                                      height: 20px;
                                    "
                                    height="20"
                                  >
                                    <tr style="border-color: transparent">
                                      <td
                                        height="20"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                        "
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          border-collapse: collapse;
                          font-size: 14px;
                          line-height: 1.5;
                          width: 100%;
                        "
                        border="0"
                        width="100%"
                      >
                        <tr style="border-color: transparent">
                          <th
                            width="600"
                            style="
                              border-color: transparent;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                            "
                            cellpadding="0"
                            cellspacing="0"
                            class="tc"
                            align="left"
                            valign="top"
                          >
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_4_element_0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-lr-0 padding-top-0 padding-bottom-0"
                                        width="600"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 0;
                                          padding-right: 0;
                                          padding-top: 0;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <div
                                          id="wout_block_4_element_0"
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            width: 100%;
                                            height: 450;
                                            display: block;
                                          "
                                          width="100%"
                                          height="450"
                                        >
                                          <img
                                            border="0"
                                            width="600"
                                            height="auto"
                                            class="desktop sp-img"
                                            align="left"
                                            alt="Bez_nazvaniya"
                                            src="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg"
                                            iout_block_4_element_0
                                            style="
                                              height: auto;
                                              line-height: 100%;
                                              outline: 0;
                                              text-decoration: none;
                                              border: 0;
                                              margin: 0;
                                              display: block;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                          /><!--[if !mso]><!-->
                                          <div
                                            style="
                                              font-size: 14px;
                                              line-height: 1.5;
                                              mso-hide: all;
                                            "
                                          >
                                            <img
                                              border="0"
                                              width="100%"
                                              height="auto"
                                              class="mobile sp-img"
                                              align="left"
                                              alt="Bez_nazvaniya"
                                              src="https://i.ibb.co/c6pzwc1/ef846e68-4941-475b-8508-686e21462848.jpg"
                                              iout_block_4_element_0
                                              style="
                                                height: auto;
                                                line-height: 100%;
                                                outline: 0;
                                                text-decoration: none;
                                                border: 0;
                                                -ms-interpolation-mode: bicubic;
                                                display: none;
                                                width: 100%;
                                                max-width: 100% !important;
                                              "
                                            />
                                          </div>
                                          <!--<![endif]-->
                                        </div>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #fff;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#ffffff"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_out_block_5"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      text-color: black;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        'Neue Haas Grotesk Text Pro', Arial,
                                        sans-serif;
                                      font-family-short: helvetica;
                                      font-weight: normal;
                                      margin: 0;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell"
                                        width="540"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          padding-top: 35px;
                                          padding-bottom: 30px;
                                        "
                                        valign="top"
                                      >
                                        <h4
                                          style="
                                            line-height: 1.2;
                                            margin: 0 0 10px;
                                            font-weight: normal;
                                            font-size: 20px;
                                            color: #444;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                          "
                                        >
                                          <span style="font-size: 20px"
                                            ><strong
                                              >Мы получили ваше сообщение!</strong
                                            ></span
                                          >
                                        </h4>
                                        <p
                                          style="
                                            line-height: inherit;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                        >
                                          <span style="color: #808080"
                                            >Здравствуйте${name ? ` ${name}` : ''}! Мы уже подбираем автомобиль для вас и готовим информацию, через несколько минут мы свяжемся с вами!</span
                                          ><span style="color: #808080"></span>
                                        </p>
                                        <p
                                          style="
                                            line-height: inherit;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                        >
                                          <span style="font-size: 16px"
                                            ><strong>Ваше сообщение:</strong></span
                                          >
                                        </p>
                                        ${name ? `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Имя: ${name}</span
                                                  >
                                                </p>
                                                ` : ''}
                                                ${email ? `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Email:&nbsp;<a
                                                      href="https://e.mail.ru/compose?To=KonstantinAchapin@mail.ru"
                                                      style="
                                                        text-decoration: none;
                                                        color: #808080;
                                                      "
                                                      >${email}</a
                                                    ></span
                                                  >
                                                </p>
                                                ` : ''}
                                                ${phone && `
                                                <p
                                                  style="
                                                    line-height: inherit;
                                                    margin: 0 0 10px;
                                                    font-size: inherit;
                                                    color: inherit;
                                                    font-family: 'Helvetica Neue', Helvetica,
                                                      'Neue Haas Grotesk Text Pro', Arial,
                                                      sans-serif;
                                                    font-weight: normal;
                                                    padding: 0;
                                                  "
                                                >
                                                  <span style="color: #808080"
                                                    >Телефон:&nbsp;${phone}</span
                                                  >
                                                </p>
                                                `}
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #333;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#333333"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    id="wout_block_out_block_22"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      text-color: black;
                                      font-family: 'Helvetica Neue', Helvetica,
                                        'Neue Haas Grotesk Text Pro', Arial,
                                        sans-serif;
                                      font-family-short: helvetica;
                                      font-weight: normal;
                                      margin: 0;
                                      overflow: hidden;
                                    "
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-bottom-0"
                                        width="570"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 0;
                                        "
                                        valign="top"
                                      >
                                        <p
                                          style="
                                            line-height: 1;
                                            margin: 0 0 10px;
                                            font-size: inherit;
                                            color: inherit;
                                            font-family: 'Helvetica Neue', Helvetica,
                                              'Neue Haas Grotesk Text Pro', Arial,
                                              sans-serif;
                                            text-align: center;
                                            font-weight: normal;
                                            padding: 0;
                                          "
                                          align="center"
                                        >
                                          <span style="color: #ffffff"
                                            >Мы всегда на связи:</span
                                          >
                                        </p>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                border-collapse: collapse;
                                font-size: 14px;
                                line-height: 1.5;
                                background-color: #333;
                                border-top-right-radius: 0;
                                border-top-left-radius: 0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                              "
                              bgcolor="#333333"
                            >
                              <tr style="border-color: transparent">
                                <td
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: collapse;
                                    border-color: transparent;
                                  "
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="
                                      border-collapse: separate;
                                      font-size: 14px;
                                      line-height: 1.5;
                                      size: 32px;
                                      order: 1;
                                      text-align: center;
                                      overflow: hidden;
                                    "
                                    align="center"
                                  >
                                    <tr
                                      class="content-row"
                                      style="
                                        border-color: transparent;
                                        color: #444;
                                        font-family: Arial, 'Helvetica Neue',
                                          Helvetica, sans-serif;
                                      "
                                    >
                                      <td
                                        class="content-cell padding-top-0"
                                        width="570"
                                        style="
                                          border-collapse: collapse;
                                          border-color: transparent;
                                          vertical-align: top;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 0;
                                          padding-bottom: 15px;
                                        "
                                        valign="top"
                                      >
                                        <table
                                          class="social"
                                          cellpadding="5"
                                          border="0"
                                          cellspacing="0"
                                          style="
                                            border-collapse: collapse;
                                            font-size: 14px;
                                            line-height: 1;
                                            border-color: transparent;
                                            border-width: 0;
                                            border-style: none;
                                            border: 0;
                                            display: inline-block;
                                            border-spacing: 0;
                                          "
                                        >
                                          <tr style="border-color: transparent">
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://wa.me/79520524700"
                                                style="
                                                  text-decoration: none;
                                                  color: #0089bf;
                                                "
                                                ><img
                                                  border="0"
                                                  alt="Telegram"
                                                  class="social small_img smallImg"
                                                  style="
                                                    height: auto;
                                                    line-height: 100%;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    border: 0;
                                                    border-color: transparent;
                                                    border-width: 0;
                                                    border-style: none;
                                                    display: block;
                                                    margin: 5px;
                                                  "
                                                  vspace="5"
                                                  hspace="5"
                                                  title="Telegram"
                                                  width="32"
                                                  height="auto"
                                                  src="https://s7845926.sendpul.se/img/constructor/social/round/telegram.png"
                                              /></a>
                                            </th>
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://t.me/BubbleGum39"
                                                style="
                                                  text-decoration: none;
                                                  color: #0089bf;
                                                "
                                                ><img
                                                  border="0"
                                                  alt="WhatsApp"
                                                  class="social small_img smallImg"
                                                  style="
                                                    height: auto;
                                                    line-height: 100%;
                                                    outline: 0;
                                                    text-decoration: none;
                                                    border: 0;
                                                    border-color: transparent;
                                                    border-width: 0;
                                                    border-style: none;
                                                    display: block;
                                                    margin: 5px;
                                                  "
                                                  vspace="5"
                                                  hspace="5"
                                                  title="WhatsApp"
                                                  width="32"
                                                  height="auto"
                                                  src="https://s7845926.sendpul.se/img/constructor/social/round/whatsapp.png"
                                              /></a>
                                            </th>
                                            <th
                                              class="social_element social_element_h_i"
                                              style="
                                                border-color: transparent;
                                                padding: 2px 5px;
                                                font-size: 13px;
                                                font-family: Arial, sans-serif;
                                                line-height: 32px;
                                                font-weight: 400;
                                                text-align: left;
                                                border-width: 0;
                                                border-style: none;
                                                border: 0;
                                              "
                                              align="left"
                                            >
                                            </th>
                                          </tr>
                                        </table>
                                        <div
                                          style="
                                            font-size: 14px;
                                            line-height: 1.5;
                                            clear: both;
                                          "
                                        ></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  width="600px"
                  style="border-collapse: collapse; font-size: 14px; line-height: 1.5"
                ></table>
              </td>
            </tr>
          </table>
        </body>
      </html > `
    })

  } catch (err) {
    (err);
  }

  res.status(200).json(req.body);
}