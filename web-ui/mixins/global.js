export default {
    computed: {
        user() {
            return this.$store.getters.USER_INFO;
        },
        isAuthorized() {
            return this.$store.getters.IS_AUTHORIZED;
        }
    },
    methods: {
        errorMessage(message) {
            this.$notify.error({
                title: 'Error',
                message: message
            })
        },
        successMessage(message) {
            this.$notify.success({
                title: 'Success',
                message: message
            })
        }
    },
}