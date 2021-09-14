import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <Link href='/'>
            <a>Home</a>
            </Link>
            <Link href='/posts/users'>
            <a>Users</a>
            </Link>
            <style jsx>

                {`
                  nav{
                      padding-top: 10px;
                  }    
                  a {
                      padding: 0 10px;
                  }
                `}

            </style>
            
            <Link href ='/posts'>
            
            <a>Posts</a>
            </Link>
        </nav>

    )
}