import { Action, Observer } from './Button';

export default class Backdrop implements Observer {
	public $backdrop = document.querySelector('.header__menu-backdrop');

	toggle(action: Action): void {
		if (
			action === 'CLOSE' &&
			this.$backdrop?.classList.contains('header__menu-backdrop--show')
		) {
			this.$backdrop?.classList.remove('header__menu-backdrop--show');
		} else {
			this.$backdrop?.classList.add('header__menu-backdrop--show');
		}
	}
}
