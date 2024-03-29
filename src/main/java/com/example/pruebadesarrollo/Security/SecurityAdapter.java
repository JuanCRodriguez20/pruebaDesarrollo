package com.example.pruebadesarrollo.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;


@Configuration
@EnableWebSecurity
public class SecurityAdapter extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.authorizeRequests(
                a -> a.antMatchers("/error", "/webjars/", "/api/").permitAll().anyRequest().authenticated()
        ).exceptionHandling(
                e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.FORBIDDEN))
        ).oauth2Login().defaultSuccessUrl("/homePage.html", true);

        http.cors().and().csrf().disable();
        http.logout(l -> l
                .logoutSuccessUrl("/").permitAll()
        );
    }
}


