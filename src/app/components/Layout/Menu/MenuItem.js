const MenuItem = React.memo(({ platform }) => {
    return (
      <Link href={`/games/${platform.attributes.slug}`}>
        {/* <Image
            src={platform.attributes.icon.data.attributes.url}
            alt={platform.attributes.title}
        /> */}
        {platform.attributes.title}
      </Link>
    );
  });
  