
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_devDependencies_prisma: string;
	export const LDFLAGS: string;
	export const __MISE_DIFF: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const WARP_HONOR_PS1: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const CPPFLAGS: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const LIBRARY_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GVM_ROOT: string;
	export const npm_package_scripts_dev: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const PNPM_HOME: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_dependencies_lucia: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_dependencies__prisma_client: string;
	export const npm_package_dependencies_pnpm: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_execpath: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const ACCESS_KEY_ID: string;
	export const LSCOLORS: string;
	export const npm_config_frozen_lockfile: string;
	export const __MISE_WATCH: string;
	export const PATH: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const PWD: string;
	export const GVM_VERSION: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__tsconfig_svelte: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const ANTHROPIC_API_KEY: string;
	export const RBENV_SHELL: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const SHLVL: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const npm_package_dependencies_nostr_tools: string;
	export const __MISE_ORIG_PATH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const MISE_SHELL: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const SSH_SOCKET_DIR: string;
	export const npm_package_dependencies__lucia_auth_adapter_prisma: string;
	export const PKG_CONFIG_PATH: string;
	export const BUN_INSTALL: string;
	export const NVM_BIN: string;
	export const __MISE_DIR: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_dependencies_svelte_spa_router: string;
	export const npm_package_dependencies_svelte_select: string;
	export const CONDA_CHANGEPS1: string;
	export const npm_package_scripts_check: string;
	export const GVM_PATH_BACKUP: string;
	export const COLORTERM: string;
	export const npm_package_dependencies_svelte_routing: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_devDependencies_prisma: string;
		LDFLAGS: string;
		__MISE_DIFF: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		WARP_HONOR_PS1: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		CPPFLAGS: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		LIBRARY_PATH: string;
		TERM_PROGRAM_VERSION: string;
		GVM_ROOT: string;
		npm_package_scripts_dev: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		npm_package_private: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		ZSH: string;
		PNPM_HOME: string;
		NVM_DIR: string;
		USER: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_dependencies_lucia: string;
		SSH_AUTH_SOCK: string;
		npm_package_dependencies__prisma_client: string;
		npm_package_dependencies_pnpm: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_tslib: string;
		npm_execpath: string;
		WARP_USE_SSH_WRAPPER: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		ACCESS_KEY_ID: string;
		LSCOLORS: string;
		npm_config_frozen_lockfile: string;
		__MISE_WATCH: string;
		PATH: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		PWD: string;
		GVM_VERSION: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		AWS_SECRET_ACCESS_KEY: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__tsconfig_svelte: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		ANTHROPIC_API_KEY: string;
		RBENV_SHELL: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_svelte_check: string;
		SHLVL: string;
		HOME: string;
		npm_package_type: string;
		npm_package_dependencies_nostr_tools: string;
		__MISE_ORIG_PATH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		MISE_SHELL: string;
		LOGNAME: string;
		LESS: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		SSH_SOCKET_DIR: string;
		npm_package_dependencies__lucia_auth_adapter_prisma: string;
		PKG_CONFIG_PATH: string;
		BUN_INSTALL: string;
		NVM_BIN: string;
		__MISE_DIR: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_dependencies_svelte_spa_router: string;
		npm_package_dependencies_svelte_select: string;
		CONDA_CHANGEPS1: string;
		npm_package_scripts_check: string;
		GVM_PATH_BACKUP: string;
		COLORTERM: string;
		npm_package_dependencies_svelte_routing: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
