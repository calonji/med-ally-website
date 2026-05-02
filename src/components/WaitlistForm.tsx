import { type FC } from 'react';
import { Sparkles } from 'lucide-react';

const inputClass =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20';

const WaitlistForm: FC = () => {
  return (
    <form
      action="https://medally.us20.list-manage.com/subscribe/post?u=ec40e6569bcd69967e4210e3a&id=a8e5115dc2&f_id=002c16eaf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full space-y-4"
    >
      <p className="text-right text-xs text-gray-500">
        <span className="text-orange-500">*</span> indicates required
      </p>

      <div className="space-y-1.5">
        <label htmlFor="mce-EMAIL" className="text-sm font-medium text-gray-700">
          Email Address <span className="text-orange-500">*</span>
        </label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          className={inputClass}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="mce-FNAME" className="text-sm font-medium text-gray-700">
          Name <span className="text-orange-500">*</span>
        </label>
        <input
          type="text"
          name="FNAME"
          id="mce-FNAME"
          className={inputClass}
          placeholder="Enter your full name"
          autoComplete="name"
          minLength={2}
          required
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="mce-PHONE" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="PHONE"
          id="mce-PHONE"
          className={inputClass}
          placeholder="Enter your phone number (optional)"
          autoComplete="tel"
        />
      </div>

      <input type="hidden" name="tags" value="3956289" />
      <div aria-hidden="true" className="absolute -left-[5000px]">
        <label htmlFor="mce-HONEYPOT">Leave this field empty</label>
        <input
          type="text"
          name="b_ec40e6569bcd69967e4210e3a_a8e5115dc2"
          id="mce-HONEYPOT"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-base font-extrabold tracking-wide text-white transition hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
      >
        Reserve Your Spot Now
        <Sparkles className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );
};

export default WaitlistForm;
