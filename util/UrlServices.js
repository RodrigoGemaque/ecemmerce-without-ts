 

const UrlService = {
  execute({ page, search }) {
    return `${!!search ? `?search[name]=${search}` : ''}` +
      `${!!search ? '&' : '?'}page=${page}`;
  }
}

export default UrlService;