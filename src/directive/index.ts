import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'

export default function directives(app) {
	app.directive('hasRole', hasRole)
	app.directive('hasPermi', hasPermi)
}
