import { type FC } from 'react';

const WaitlistForm: FC = () => {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
          <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
            <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
            <style type="text/css">
              #mc_embed_signup {
                background: transparent !important;
                clear: left;
                width: 100%;
                padding: 0 !important;
                font-family: inherit !important;
              }
              #mc_embed_signup .mc-field-group {
                padding-bottom: 16px !important;
                min-height: auto !important;
              }
              #mc_embed_signup .mc-field-group label {
                color: #4b5563 !important;
                font-size: 0.875rem !important;
                font-weight: 500 !important;
                padding-bottom: 4px !important;
              }
              #mc_embed_signup input {
                border: 1px solid #e5e7eb !important;
                border-radius: 0.5rem !important;
                padding: 0.75rem 1rem !important;
                font-size: 0.875rem !important;
                line-height: 1.25rem !important;
                width: 100% !important;
                background: white !important;
              }
              #mc_embed_signup input:focus {
                border-color: #f97316 !important;
                outline: none !important;
                box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2) !important;
              }
              #mc_embed_signup .button {
                background: linear-gradient(to right, #f97316, #fb923c) !important;
                transition: all 0.2s ease-in-out !important;
                width: 100% !important;
                margin: 0 !important;
                height: auto !important;
                min-height: 48px !important;
                font-size: 1rem !important;
                font-weight: 800 !important;
                letter-spacing: 0.025em !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                padding: 12px 24px !important;
                line-height: 1 !important;
                border-radius: 0.5rem !important;
                text-transform: none !important;
              }
              #mc_embed_signup .button:hover {
                background: linear-gradient(to right, #ea580c, #f97316) !important;
              }
              #mc_embed_signup div.response {
                margin: 0 0 16px 0 !important;
                padding: 8px !important;
                font-weight: 400 !important;
                font-size: 14px !important;
                border-radius: 0.375rem !important;
                text-align: center !important;
              }
              #mc_embed_signup .indicates-required {
                text-align: right !important;
                font-size: 0.75rem !important;
                color: #6b7280 !important;
                margin-bottom: 1rem !important;
              }
              #mc_embed_signup .asterisk {
                color: #f97316 !important;
                font-size: 1rem !important;
              }
              #mc_embed_signup form {
                padding: 0 !important;
              }
              /* Error styles */
              #mc_embed_signup div.mce_inline_error {
                background: none !important;
                padding: 0 !important;
                font-weight: normal !important;
                color: #ef4444 !important;
                font-size: 0.75rem !important;
                margin-top: 0.25rem !important;
              }
              #mc_embed_signup input.mce_inline_error {
                border-color: #ef4444 !important;
              }
              #mc_embed_signup input.mce_inline_error:focus {
                border-color: #ef4444 !important;
                box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
              }
            </style>
            <div id="mc_embed_signup">
              <form action="https://medally.us20.list-manage.com/subscribe/post?u=ec40e6569bcd69967e4210e3a&amp;id=a8e5115dc2&amp;f_id=002c16eaf0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label>
                    <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required value="" placeholder="Enter your email">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-FNAME">Name <span class="asterisk">*</span></label>
                    <input type="text" name="FNAME" class="required text" id="mce-FNAME" required value="" placeholder="Enter your full name">
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-PHONE">Phone Number</label>
                    <input type="tel" name="PHONE" class="REQ_CSS" id="mce-PHONE" value="" placeholder="Enter your phone number (optional)">
                  </div>
                  
                  <!-- Mailchimp tag -->
                  <div hidden>
                    <input type="hidden" name="tags" value="3956289">
                  </div>
                  
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                  </div>
                  <div aria-hidden="true" style="position: absolute; left: -5000px;">
                    <input type="text" name="b_ec40e6569bcd69967e4210e3a_a8e5115dc2" tabindex="-1" value="">
                  </div>
                  <div class="clear">
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
                      Reserve Your Spot Now
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-2">
                        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
            <script type="text/javascript">
              (function($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0]='EMAIL';
                ftypes[0]='email';
                fnames[1]='FNAME';
                ftypes[1]='text';
                fnames[4]='PHONE';
                ftypes[4]='phone';
                
                // Initialize form validation on load
                $(document).ready(function() {
                  var $form = $('#mc-embedded-subscribe-form');
                  if($form.length > 0) {
                    $form.validate({
                      rules: {
                        EMAIL: {
                          required: true,
                          email: true
                        },
                        FNAME: {
                          required: true,
                          minlength: 2
                        }
                      },
                      messages: {
                        EMAIL: {
                          required: "Please enter your email address",
                          email: "Please enter a valid email address"
                        },
                        FNAME: {
                          required: "Please enter your name",
                          minlength: "Name must be at least 2 characters long"
                        }
                      },
                      errorElement: 'div',
                      errorPlacement: function(error, element) {
                        error.addClass('mce_inline_error');
                        error.insertAfter(element);
                      },
                      highlight: function(element) {
                        $(element).addClass('mce_inline_error');
                      },
                      unhighlight: function(element) {
                        $(element).removeClass('mce_inline_error');
                      }
                    });

                    // Real-time validation
                    $form.find('input').on('input blur', function() {
                      $(this).valid();
                    });
                  }
                });
              }(jQuery));
              var $mcj = jQuery.noConflict(true);
            </script>
          </div>
        `,
      }}
    />
  );
};

export default WaitlistForm;
