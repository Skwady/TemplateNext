import { Container } from '@/ui/components/container/container'
import { Navbar } from '@/ui/components/navbar/navbar'
import { Seo } from '@/ui/components/seo/seo'
import { Avatar } from '@/ui/design/avatar/avatar'
import { Button } from '@/ui/design/button/button'
import { Logo } from '@/ui/design/logo/logo'
import { Spinner } from '@/ui/design/spinner/spinner'
import { Typography } from '@/ui/design/typography/typography'
import React from 'react'
import { RiBeerFill } from 'react-icons/ri'

function DesignSystem() {
  return (
    <>
      <Seo title="Home" description="This is the home page" />
            <Navbar />
            <Container className="bg-gray-800 py-10">
              <main>
                <div className="flex items-center gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="h1" component="div">
                        H1
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="h2" component="div">
                        H2
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="h3" component="div">
                        H3
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="h4" component="div">
                        H4
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="h5" component="div">
                        H5
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="lead" component="div">
                        lead
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="body-lg" component="div">
                        body-lg
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="body-base" component="div">
                        body-base
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="body-sm" component="div">
                        body-sm
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="caption1" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="caption2" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="caption3" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="primary" variant="caption4" component="div">
                        caption
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="h1" component="div">
                        H1
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="h2" component="div">
                        H2
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="h3" component="div">
                        H3
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="h4" component="div">
                        H4
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="h5" component="div">
                        H5
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="lead" component="div">
                        lead
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="body-lg" component="div">
                        body-lg
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="body-base" component="div">
                        body-base
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="body-sm" component="div">
                        body-sm
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="caption1" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="caption2" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="caption3" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="secondary" variant="caption4" component="div">
                        caption
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="h1" component="div">
                        H1
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="h2" component="div">
                        H2
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="h3" component="div">
                        H3
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="h4" component="div">
                        H4
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="h5" component="div">
                        H5
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="lead" component="div">
                        lead
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="body-lg" component="div">
                        body-lg
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="body-base" component="div">
                        body-base
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="body-sm" component="div">
                        body-sm
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="caption1" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="caption2" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="caption3" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="white" variant="caption4" component="div">
                        caption
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="h1" component="div">
                        H1
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="h2" component="div">
                        H2
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="h3" component="div">
                        H3
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="h4" component="div">
                        H4
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="h5" component="div">
                        H5
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="lead" component="div">
                        lead
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="body-lg" component="div">
                        body-lg
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="body-base" component="div">
                        body-base
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="body-sm" component="div">
                        body-sm
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="caption1" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="caption2" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="caption3" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="black" variant="caption4" component="div">
                        caption
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="h1" component="div">
                        H1
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="h2" component="div">
                        H2
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="h3" component="div">
                        H3
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="h4" component="div">
                        H4
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="h5" component="div">
                        H5
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="lead" component="div">
                        lead
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="body-lg" component="div">
                        body-lg
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="body-base" component="div">
                        body-base
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="body-sm" component="div">
                        body-sm
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="caption1" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="caption2" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="caption3" component="div">
                        caption
                      </Typography>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2">
                      <Typography theme="gray" variant="caption4" component="div">
                        caption
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Logo size="very-small" />
                  <Logo size="small" />
                  <Logo />
                  <Logo size="large" />
                </div>
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Avatar src="/assets/images/avatar.png" alt="Avatar" size="small" />
                  <Avatar src="/assets/images/avatar.png" alt="Avatar" />
                  <Avatar src="/assets/images/avatar.png" alt="Avatar" size="large" />
                </div>
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Spinner size="small" />
                  <Spinner />
                  <Spinner size="large" />
                  <Spinner size="small" variant="white" />
                  <Spinner variant="white" />
                  <Spinner variant="white" size="large" />
                </div>
      
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Button size="small">Click me</Button>
                  <Button size="small" variant="primary">Click me</Button>
                  <Button size="small" variant="secondary">Click me</Button>
                  <Button size="small" variant="outline">Click me</Button>
                  <Button size="small" variant="disabled">Click me</Button>
                  <Button size="small" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="small" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="small" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="small" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                </div>
      
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Button size="medium">Click me</Button>
                  <Button size="medium" variant="primary">Click me</Button>
                  <Button size="medium" variant="secondary">Click me</Button>
                  <Button size="medium" variant="outline">Click me</Button>
                  <Button size="medium" variant="disabled">Click me</Button>
                  <Button size="medium" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="medium" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                </div>
      
                <div className="flex items-center gap-4 py-10 flex-wrap">
                  <Button size="large">Click me</Button>
                  <Button size="large" variant="primary">Click me</Button>
                  <Button size="large" variant="secondary">Click me</Button>
                  <Button size="large" variant="outline">Click me</Button>
                  <Button size="large" variant="disabled">Click me</Button>
                  <Button size="large" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="large" variant="ico" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiBeerFill }}></Button>
                  <Button isLoading size="large" variant="ico" iconTheme="gray" icon={{ icon: RiBeerFill }}></Button>
                </div>
                <div className="flex flex-wrap">
                  <div className="flex-wrap">
                    <div className="flex items-center gap-4 px-10 py-2 py-2 mt-11 flex-wrap">
                      <Button isLoading size="small">Click me</Button>
                      <Button isLoading size="small" variant="primary" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button isLoading size="small" variant="primary" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
      
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button isLoading size="small" variant="secondary">Click me</Button>
                      <Button isLoading size="small" variant="secondary" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button isLoading size="small" variant="secondary" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button isLoading size="small" variant="outline">Click me</Button>
                      <Button isLoading size="small" variant="outline" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button isLoading size="small" variant="outline" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button isLoading size="small" variant="disabled">Click me</Button>
                      <Button isLoading size="small" variant="disabled" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button isLoading size="small" variant="disabled" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 px-10 py-2 py-2 mt-11 flex-wrap">
                      <Button size="small">Click me</Button>
                      <Button size="small" variant="primary" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button size="small" variant="primary" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
      
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button size="small" variant="secondary">Click me</Button>
                      <Button size="small" variant="secondary" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button size="small" variant="secondary" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button size="small" variant="outline">Click me</Button>
                      <Button size="small" variant="outline" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button size="small" variant="outline" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                    <div className="flex items-center gap-4 px-10 py-2 flex-wrap">
                      <Button size="small" variant="disabled">Click me</Button>
                      <Button size="small" variant="disabled" icon={{ icon: RiBeerFill }} iconPosition="left">Click me</Button>
                      <Button size="small" variant="disabled" icon={{ icon: RiBeerFill }} iconPosition="right">Click me</Button>
                    </div>
                  </div>
                </div>
              </main>
            </Container>
    </>
  )
}

export default DesignSystem